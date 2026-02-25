# megi-claude-code-project

A Claude Code skill project.

## Project Overview

This repository is a Claude Code skills project used to develop and test Claude Code capabilities on the web.

## Repository Structure

```
.
├── CLAUDE.md              # This file — project guidance for Claude Code
├── README.md              # Project overview
└── .claude/
    ├── settings.json      # Claude Code settings and hooks configuration
    └── hooks/
        └── session-start.sh  # SessionStart hook for web sessions
```

## Session Hook

A `SessionStart` hook is configured at `.claude/hooks/session-start.sh`. It runs automatically at the start of each Claude Code web session to prepare the environment.

To add dependency installation, edit the hook script and add commands such as:
- `npm install` for Node.js projects
- `pip install -r requirements.txt` for Python projects
- `bundle install` for Ruby projects

## Development Notes

- The session-start hook only runs in remote (Claude Code on the web) environments (`CLAUDE_CODE_REMOTE=true`)
- The hook is synchronous — the session starts only after the hook completes, ensuring all dependencies are ready
