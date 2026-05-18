#!/bin/bash
# publish-design: publish a design to GitHub Pages under a ticket ID
# Accepts: a .html file, a .zip file, or a pre-extracted directory
# Usage:
#   ./publish.sh DSGN-1126 ~/Downloads/design.html
#   ./publish.sh DSGN-1126 ~/Downloads/DSGN-1126.zip
#   ./publish.sh DSGN-1126              (if designs/DSGN-1126/ already exists)

set -e

CONFIG_FILE="$(dirname "$0")/.design-config"

# ── First-run setup ──────────────────────────────────────────────────────────
if [ ! -f "$CONFIG_FILE" ]; then
  echo "First-time setup:"
  read -p "  GitHub username: " GH_USER
  read -p "  Repo name (e.g. design-pages): " GH_REPO
  echo "GH_USER=$GH_USER" > "$CONFIG_FILE"
  echo "GH_REPO=$GH_REPO" >> "$CONFIG_FILE"
  echo ""
fi

source "$CONFIG_FILE"

# ── Args ─────────────────────────────────────────────────────────────────────
INPUT="$1"
SRC="$2"

# Accept bare number or full ID
[[ "$INPUT" =~ ^[0-9]+$ ]] && TICKET_ID="DSGN-$INPUT" || TICKET_ID="$INPUT"

if [ -z "$TICKET_ID" ]; then
  echo "Usage: ./publish.sh <TICKET-ID> [file.html | file.zip | directory]"
  exit 1
fi

REPO_ROOT="$(dirname "$0")"
DEST_DIR="$REPO_ROOT/designs/$TICKET_ID"

# ── Ingest source ─────────────────────────────────────────────────────────────
if [ -z "$SRC" ]; then
  # No source given — assume folder already exists (extracted manually)
  if [ ! -d "$DEST_DIR" ]; then
    echo "Error: no source provided and designs/$TICKET_ID/ does not exist."
    exit 1
  fi
  echo "Using existing designs/$TICKET_ID/"

elif [[ "$SRC" == *.zip ]]; then
  # Zip file — extract into dest, rename entry HTML to index.html
  mkdir -p "$DEST_DIR"
  unzip -o "$SRC" -d "$DEST_DIR"
  # Rename any .html file that isn't index.html to index.html
  HTML=$(find "$DEST_DIR" -maxdepth 1 -name "*.html" ! -name "index.html" | head -1)
  [ -n "$HTML" ] && mv "$HTML" "$DEST_DIR/index.html" && echo "Renamed $(basename "$HTML") → index.html"
  echo "Extracted zip to designs/$TICKET_ID/"

elif [ -d "$SRC" ]; then
  # Directory — copy whole folder
  mkdir -p "$DEST_DIR"
  cp -r "$SRC/." "$DEST_DIR/"
  echo "Copied directory to designs/$TICKET_ID/"

elif [ -f "$SRC" ]; then
  # Single HTML file
  mkdir -p "$DEST_DIR"
  cp "$SRC" "$DEST_DIR/index.html"
  echo "Copied design to designs/$TICKET_ID/index.html"

else
  echo "Error: source not found: $SRC"
  exit 1
fi

# ── Rebuild index ─────────────────────────────────────────────────────────────
node "$REPO_ROOT/build-index.js"

# ── Commit & push ─────────────────────────────────────────────────────────────
cd "$REPO_ROOT"
git add designs/ index.html
git commit -m "design: publish $TICKET_ID"
git push

PUBLIC_URL="https://$GH_USER.github.io/$GH_REPO/designs/$TICKET_ID/"
echo ""
echo "Published: $PUBLIC_URL"
echo "$TICKET_ID  $PUBLIC_URL" >> "$REPO_ROOT/published.log"
