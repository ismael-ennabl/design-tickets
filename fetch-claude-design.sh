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

# ── Destination directories ───────────────────────────────────────────────────
DEST="$REPO_ROOT/youtrack/$TICKET_ID"
SHARED_DIR="$REPO_ROOT/youtrack/_shared"
DS_DIR="$REPO_ROOT/youtrack/_design_system"
mkdir -p "$DEST" "$SHARED_DIR" "$DS_DIR/fonts" "$DS_DIR/icons" "$DS_DIR/logos"

# ── Routing rules ─────────────────────────────────────────────────────────────
# JSX components → _shared/ (React screen-level components)
SHARED_JSX=("icons.jsx" "dialogs.jsx" "picker.jsx" "step3.jsx")
# CSS tokens → _design_system/
DS_CSS=("colors_and_type.css" "styles.css")

for f in "$PROJECT_DIR"/*; do
  name=$(basename "$f")

  if [[ " ${SHARED_JSX[*]} " == *" $name "* ]]; then
    cp "$f" "$SHARED_DIR/$name"
    echo "  component: $name → _shared/"

  elif [[ " ${DS_CSS[*]} " == *" $name "* ]]; then
    cp "$f" "$DS_DIR/$name"
    echo "  token: $name → _design_system/"

  elif [ "$name" = "fonts" ] && [ -d "$f" ]; then
    cp -r "$f/." "$DS_DIR/fonts/"
    echo "  asset: fonts/ → _design_system/fonts/"

  elif [ "$name" = "design-system" ] && [ -d "$f" ]; then
    # Merge design-system/ subfolders into _design_system/
    for sub in "$f"/*; do
      subname=$(basename "$sub")
      if [ "$subname" = "colors_and_type.css" ] || [ "$subname" = "styles.css" ]; then
        cp "$sub" "$DS_DIR/$subname"
        echo "  token: design-system/$subname → _design_system/"
      elif [ -d "$sub" ]; then
        mkdir -p "$DS_DIR/$subname"
        cp -r "$sub/." "$DS_DIR/$subname/"
        echo "  asset: design-system/$subname/ → _design_system/$subname/"
      else
        cp "$sub" "$DS_DIR/$subname"
        echo "  asset: design-system/$subname → _design_system/"
      fi
    done

  else
    cp -r "$f" "$DEST/"
  fi
done

# ── Rename main HTML → index.html ─────────────────────────────────────────────
BASENAME=$(basename "$HTML_FILE")
DEST_HTML="$DEST/$BASENAME"
[ "$BASENAME" != "index.html" ] && mv "$DEST_HTML" "$DEST/index.html" && echo "Renamed $BASENAME → index.html"

# ── Rewrite index.html paths ──────────────────────────────────────────────────
IHTML="$DEST/index.html"

# JSX components → ../_shared/
for f in "${SHARED_JSX[@]}"; do
  sed -i '' "s|src=\"$f\"|src=\"../_shared/$f\"|g" "$IHTML"
  sed -i '' "s|href=\"$f\"|href=\"../_shared/$f\"|g" "$IHTML"
done

# CSS tokens → ../_design_system/
for f in "${DS_CSS[@]}"; do
  sed -i '' "s|href=\"$f\"|href=\"../_design_system/$f\"|g" "$IHTML"
  sed -i '' "s|src=\"$f\"|src=\"../_design_system/$f\"|g" "$IHTML"
done

# design-system/ folder references → ../_design_system/
sed -i '' 's|href="design-system/|href="../_design_system/|g' "$IHTML"
sed -i '' 's|src="design-system/|src="../_design_system/|g' "$IHTML"
sed -i '' "s|icon: 'design-system/|icon: '../_design_system/|g" "$IHTML"

echo "  updated index.html paths → ../_design_system/ + ../_shared/"

# ── Rebuild index and push ─────────────────────────────────────────────────────
node "$REPO_ROOT/build-index.js"
cd "$REPO_ROOT"
git add youtrack/ index.html
git commit -m "sync: $TICKET_ID from claude.ai/design"
git push

source "$REPO_ROOT/.design-config" 2>/dev/null || true
GH_USER="${GH_USER:-ismael-ennabl}"
GH_REPO="${GH_REPO:-design-tickets}"

echo ""
echo "Published: https://$GH_USER.github.io/$GH_REPO/youtrack/$TICKET_ID/"
echo "$TICKET_ID  https://$GH_USER.github.io/$GH_REPO/youtrack/$TICKET_ID/" >> "$REPO_ROOT/published.log"
