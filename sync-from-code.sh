#!/bin/bash
# Publishes local code changes to GitHub Pages for a ticket.
# The Figma push half is handled by Claude via MCP after this runs.
# Usage: ./sync-from-code.sh 1127  (or DSGN-1127)

set -e

INPUT="$1"
[[ "$INPUT" =~ ^[0-9]+$ ]] && TICKET_ID="DSGN-$INPUT" || TICKET_ID="$INPUT"

REPO_ROOT="$(dirname "$0")"
DESIGN_FILE="$REPO_ROOT/designs/$TICKET_ID/index.html"

if [ -z "$TICKET_ID" ]; then
  echo "Usage: ./sync-from-code.sh <number-or-ticket-id>"
  exit 1
fi

if [ ! -f "$DESIGN_FILE" ]; then
  echo "No local design found at designs/$TICKET_ID/index.html"
  echo "Run publish.sh first to create an initial design for this ticket."
  exit 1
fi

# Rebuild index in case listing changed
node "$REPO_ROOT/build-index.js"

cd "$REPO_ROOT"
git add designs/ index.html
git diff --cached --quiet && echo "No changes to publish." && exit 0

git commit -m "sync: update $TICKET_ID from local code"
git push

source "$REPO_ROOT/.design-config" 2>/dev/null || true
GH_USER="${GH_USER:-ismael-ennabl}"
GH_REPO="${GH_REPO:-design-tickets}"

echo ""
echo "GitHub Pages updated: https://$GH_USER.github.io/$GH_REPO/designs/$TICKET_ID/"
echo "Next: Claude will push the Figma update via MCP."
