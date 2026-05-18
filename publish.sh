#!/bin/bash
# publish-design: publish an HTML design to GitHub Pages under a ticket ID
# Usage: ./publish.sh <TICKET-ID> <path-to-html-file>
# Example: ./publish.sh ENN-42 ~/Downloads/step3.html

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
TICKET_ID="$1"
HTML_SRC="$2"

if [ -z "$TICKET_ID" ] || [ -z "$HTML_SRC" ]; then
  echo "Usage: ./publish.sh <TICKET-ID> <path-to-html-file>"
  echo "  e.g. ./publish.sh ENN-42 ~/Downloads/step3.html"
  exit 1
fi

if [ ! -f "$HTML_SRC" ]; then
  echo "Error: file not found: $HTML_SRC"
  exit 1
fi

REPO_ROOT="$(dirname "$0")"
DEST_DIR="$REPO_ROOT/designs/$TICKET_ID"

# ── Copy design ───────────────────────────────────────────────────────────────
mkdir -p "$DEST_DIR"
cp "$HTML_SRC" "$DEST_DIR/index.html"
echo "Copied design to designs/$TICKET_ID/index.html"

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
