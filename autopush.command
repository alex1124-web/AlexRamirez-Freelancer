#!/bin/bash
# ============================================================
#  AUTO-PUSH — Alex Ramirez Freelancer Site
#  Double-click this file to start watching.
#  Every time you save a file it auto-commits & pushes to GitHub.
#  Press Ctrl+C to stop.
# ============================================================

cd "$(dirname "$0")"

SITE_DIR="/Users/bigpapa/Workspace/alex-ramirez-site"
WATCHED="index.html styles.css main.js robots.txt sitemap.xml llms.txt"

echo ""
echo "  ╔══════════════════════════════════════════╗"
echo "  ║   AUTO-PUSH — Alex Ramirez Site          ║"
echo "  ║   Watching for file changes...           ║"
echo "  ║   Press Ctrl+C to stop.                  ║"
echo "  ╚══════════════════════════════════════════╝"
echo ""

cd "$SITE_DIR"

# Get a hash of all tracked file contents
get_hash() {
  cat $WATCHED 2>/dev/null | md5
}

LAST_HASH=$(get_hash)

while true; do
  sleep 3

  CURRENT_HASH=$(get_hash)

  if [ "$CURRENT_HASH" != "$LAST_HASH" ]; then
    LAST_HASH="$CURRENT_HASH"

    # Debounce — wait until the file stops changing
    sleep 2
    DEBOUNCED_HASH=$(get_hash)
    if [ "$DEBOUNCED_HASH" != "$CURRENT_HASH" ]; then
      LAST_HASH="$DEBOUNCED_HASH"
      continue
    fi

    TIMESTAMP=$(date '+%b %d %Y, %I:%M %p')
    echo "  📝  Change detected at $TIMESTAMP"

    git add $WATCHED 2>/dev/null

    # Only commit if there's actually something staged
    if ! git diff --cached --quiet; then
      git commit -m "Update: $TIMESTAMP" --quiet
      git push origin main --quiet

      if [ $? -eq 0 ]; then
        echo "  ✅  Pushed to GitHub at $TIMESTAMP"
      else
        echo "  ❌  Push failed — check your internet connection"
      fi
    fi

    echo ""
  fi
done
