# megi-claude-code-project

Claude Code 스킬 프로젝트입니다.

## 프로젝트 개요

이 저장소는 Claude Code의 기능을 개발하고 테스트하기 위한 Claude Code 스킬 프로젝트입니다.

## 디렉토리 구조

```
.
├── CLAUDE.md              # 이 파일 — Claude Code를 위한 프로젝트 안내 문서
├── README.md              # 프로젝트 개요
└── .claude/
    ├── settings.json      # Claude Code 설정 및 훅 구성
    └── hooks/
        └── session-start.sh  # 웹 세션용 SessionStart 훅
```

## 세션 훅

`.claude/hooks/session-start.sh`에 `SessionStart` 훅이 설정되어 있습니다.
Claude Code 웹 세션이 시작될 때 자동으로 실행되어 환경을 준비합니다.

의존성 설치가 필요한 경우 훅 스크립트에 다음과 같은 명령어를 추가하세요:
- `npm install` — Node.js 프로젝트
- `pip install -r requirements.txt` — Python 프로젝트
- `bundle install` — Ruby 프로젝트

## 개발 참고사항

- 세션 시작 훅은 원격 환경(Claude Code 웹)에서만 실행됩니다 (`CLAUDE_CODE_REMOTE=true`)
- 훅은 동기(synchronous) 방식으로 실행되며, 훅이 완료된 후에만 세션이 시작됩니다. 이를 통해 모든 의존성이 준비된 상태에서 세션을 시작할 수 있습니다
