#!/bin/bash
# Fetches a YouTrack ticket and prints JSON with id, title, description
# Usage: ./fetch-ticket.sh ENN-42
# Requires: YOUTRACK_TOKEN env variable

set -e

TICKET_ID="$1"
BASE_URL="https://ennabl.youtrack.cloud"
FIELDS="id,summary,description,customFields(name,value(name,text,id))"

if [ -z "$TICKET_ID" ]; then
  echo "Usage: ./fetch-ticket.sh <TICKET-ID>" >&2
  exit 1
fi

if [ -z "$YOUTRACK_TOKEN" ]; then
  echo "Error: YOUTRACK_TOKEN is not set." >&2
  echo "Add this to ~/.zshrc:  export YOUTRACK_TOKEN=\"perm:...\""  >&2
  exit 1
fi

curl -s \
  -H "Authorization: Bearer $YOUTRACK_TOKEN" \
  -H "Accept: application/json" \
  "$BASE_URL/api/issues/$TICKET_ID?fields=$FIELDS"
