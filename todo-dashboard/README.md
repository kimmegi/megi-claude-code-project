# todo-dashboard

Vite + React + TypeScript + Tailwind CSS v4로 만든 할 일 관리 대시보드 앱입니다.

## 기능

- 할 일 추가 (제목, 카테고리, 우선순위 설정)
- 상태 관리 (Todo → In Progress → Done 순환)
- 카테고리 및 상태별 필터링
- 통계 카드 및 완료율 프로그레스 바

## 시작하기

```bash
npm install       # 의존성 설치
npm run dev       # 개발 서버 실행 (http://localhost:5173)
npm run build     # 프로덕션 빌드
```

## 아키텍처

```
src/
├── types/todo.ts          # Todo, Status, Category, Priority 타입 정의
├── hooks/useTodos.ts      # 전체 상태 관리 (추가/삭제/상태변경/통계)
├── components/
│   ├── StatsCards.tsx     # 통계 카드 4개 + 완료율 프로그레스 바
│   ├── TodoList.tsx       # 카테고리·상태 필터 + TodoItem 목록 렌더링
│   ├── TodoItem.tsx       # 개별 할 일 카드 (상태 순환)
│   └── AddTodoForm.tsx    # 할 일 추가 모달 폼
└── App.tsx                # 최상위 — useTodos 호출 후 props로 하위 전달
```

**데이터 흐름**: `useTodos` (상태) → `App` → `StatsCards` / `TodoList` → `TodoItem`

> 데이터는 메모리 상태로만 관리되며, 새로고침 시 초기화됩니다.
