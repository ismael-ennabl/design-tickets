#!/bin/bash
# Fetches a claude.ai/design project via Anthropic's API and publishes it.
# Usage:
#   ./fetch-claude-design.sh 1127 https://api.anthropic.com/v1/design/h/HASH
#   ./fetch-claude-design.sh 1127 https://api.anthropic.com/v1/design/h/HASH?open_file=Step+3+Templates.html
#
# Get the API URL from claude.ai/design: Share → "Handoff to Claude Code..." (last menu item).

set -e

INPUT="$1"
DESIGN_URL="$2"

# Normalize ticket ID
[[ "$INPUT" =~ ^[0-9]+$ ]] && TICKET_ID="DSGN-$INPUT" || TICKET_ID="$INPUT"

REPO_ROOT="$(dirname "$0")"

if [ -z "$TICKET_ID" ] || [ -z "$DESIGN_URL" ]; then
  echo "Usage: ./fetch-claude-design.sh <ticket-number> <api-url>"
  echo "  e.g. ./fetch-claude-design.sh 1127 'https://api.anthropic.com/v1/design/h/HASH'"
  exit 1
fi

# Strip query params to get the clean download URL
BASE_URL="${DESIGN_URL%%\?*}"

WORK_DIR=$(mktemp -d)
trap "rm -rf $WORK_DIR" EXIT

echo "Fetching $TICKET_ID from claude.ai/design..."
curl -s --fail "$BASE_URL" -o "$WORK_DIR/design.tar.gz"

echo "Extracting..."
tar -xzf "$WORK_DIR/design.tar.gz" -C "$WORK_DIR"

# Find the project/ folder (the tar contains a named top-level dir)
PROJECT_DIR=$(find "$WORK_DIR" -maxdepth 2 -type d -name "project" | head -1)
if [ -z "$PROJECT_DIR" ]; then
  echo "Error: could not find project/ folder in archive"
  ls "$WORK_DIR"
  exit 1
fi

# Find the main HTML file
HTML_FILE=$(find "$PROJECT_DIR" -maxdepth 1 -name "*.html" | head -1)
if [ -z "$HTML_FILE" ]; then
  echo "Error: no HTML file found in project/"
  ls "$PROJECT_DIR"
  exit 1
fi
echo "Found: $(basename "$HTML_FILE")"

# Shared files that live in designs/_shared/ — never duplicated per ticket
SHARED_FILES=("colors_and_type.css" "styles.css" "icons.jsx" "dialogs.jsx" "picker.jsx" "step3.jsx")
SHARED_DIR="$REPO_ROOT/designs/_shared"
mkdir -p "$SHARED_DIR/fonts"

# Route shared files to _shared/, ticket-specific files to the ticket folder
DEST="$REPO_ROOT/designs/$TICKET_ID"
mkdir -p "$DEST"

for f in "$PROJECT_DIR"/*; do
  name=$(basename "$f")
  if [[ " ${SHARED_FILES[*]} " == *" $name "* ]]; then
    cp "$f" "$SHARED_DIR/$name"
    echo "  shared: $name → _shared/"
  elif [ "$name" = "fonts" ] && [ -d "$f" ]; then
    cp -r "$f/." "$SHARED_DIR/fonts/"
    echo "  shared: fonts/ → _shared/fonts/"
  else
    cp -r "$f" "$DEST/"
  fi
done

# Rename the main HTML to index.html
BASENAME=$(basename "$HTML_FILE")
DEST_HTML="$DEST/$BASENAME"
[ "$BASENAME" != "index.html" ] && mv "$DEST_HTML" "$DEST/index.html" && echo "Renamed $BASENAME → index.html"

# Rewrite index.html so shared files reference ../_shared/
IHTML="$DEST/index.html"
for f in "${SHARED_FILES[@]}"; do
  # CSS links
  sed -i '' "s|href=\"$f\"|href=\"../_shared/$f\"|g" "$IHTML"
  # JS script tags
  sed -i '' "s|src=\"$f\"|src=\"../_shared/$f\"|g" "$IHTML"
done
# fonts path is handled by the CSS file itself (relative to _shared/)
echo "  updated index.html paths → ../_shared/"

# Rebuild index and push
node "$REPO_ROOT/build-index.js"
cd "$REPO_ROOT"
git add designs/ index.html
git commit -m "sync: $TICKET_ID from claude.ai/design"
git push

source "$REPO_ROOT/.design-config" 2>/dev/null || true
GH_USER="${GH_USER:-ismael-ennabl}"
GH_REPO="${GH_REPO:-design-pages}"

echo ""
echo "Published: https://$GH_USER.github.io/$GH_REPO/designs/$TICKET_ID/"
echo "$TICKET_ID  https://$GH_USER.github.io/$GH_REPO/designs/$TICKET_ID/" >> "$REPO_ROOT/published.log"
