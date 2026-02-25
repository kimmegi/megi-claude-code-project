#!/bin/bash
set -euo pipefail

# Only run in remote (Claude Code on the web) environments
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

echo "Session start hook running..."

# No external dependencies to install for this project.
# Add dependency installation commands here as the project grows.
# Examples:
#   npm install
#   pip install -r requirements.txt
#   bundle install

echo "Session start hook complete."
