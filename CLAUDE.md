# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Claude Code 스킬 실습 프로젝트입니다. 현재 `todo-dashboard`, `disaster-control` 서브 프로젝트가 포함되어 있습니다.

## Repository

- Remote: https://github.com/kimmegi/megi-claude-code-project.git
- Branch: `main`

---

## todo-dashboard

할 일 관리 대시보드 앱입니다.

**스택**: Vite + React + TypeScript + Tailwind CSS v4

### 주요 명령어

```bash
cd todo-dashboard
npm install       # 의존성 설치
npm run dev       # 개발 서버 실행 (http://localhost:5173)
npm run build     # 프로덕션 빌드
```

### 아키텍처

```
src/
├── types/todo.ts          # Todo, Status, Category, Priority 타입 정의
├── hooks/useTodos.ts      # 전체 상태 관리 (추가/삭제/상태변경/통계)
├── components/
│   ├── StatsCards.tsx     # 통계 카드 4개 + 완료율 프로그레스 바
│   ├── TodoList.tsx       # 카테고리·상태 필터 + TodoItem 목록 렌더링
│   ├── TodoItem.tsx       # 개별 할 일 카드 (상태 순환: todo→in-progress→done)
│   └── AddTodoForm.tsx    # 할 일 추가 모달 폼
└── App.tsx                # 최상위 — useTodos 호출 후 props로 하위 전달
```

**데이터 흐름**: `useTodos` (상태) → `App` → `StatsCards` / `TodoList` → `TodoItem`

- 타입 전용 import는 `import type` 사용 (`verbatimModuleSyntax` 활성화)
- 데이터는 현재 메모리 상태로만 관리 (새로고침 시 초기화)

---

## disaster-control

재난 스트림 API를 트리거하는 태블릿용 제어 페이지입니다.

**스택**: HTML + Node.js (외부 라이브러리 없음)

### 주요 명령어

```bash
cd disaster-control
node server.js    # 웹서버 실행 (http://localhost:3000)
```

### 아키텍처

```
disaster-control/
├── index.html   # 버튼 4개 제어 페이지
└── server.js    # Node.js HTTP 서버 (포트 3000, 0.0.0.0 바인딩)
```

- Base URL: `http://10.0.24.101:9082/api/koba/setApiKbsDisasterStreamForKoba/`
- 버튼: reset / wildfire(산불) / heavyrain(호우) / eqk(지진)
