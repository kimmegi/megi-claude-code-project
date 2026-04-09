# disaster-control

재난 스트림 API를 트리거하는 태블릿용 제어 페이지입니다.

## 기능

- 버튼 4개로 KBS 재난 스트림 API 호출 (reset / 산불 / 호우 / 지진)
- 호출 성공/실패 토스트 메시지 표시
- 호출 중 버튼 비활성화 (중복 클릭 방지)

## 시작하기

```bash
node server.js
```

실행 후 터미널에 출력되는 IP로 태블릿에서 접속:

```
서버 실행 중
  로컬:   http://localhost:3000
  태블릿: http://192.168.x.x:3000
```

## API 엔드포인트

| 버튼 | 엔드포인트 |
|---|---|
| reset | `GET /api/koba/setApiKbsDisasterStreamForKoba/reset/` |
| 산불 | `GET /api/koba/setApiKbsDisasterStreamForKoba/wildfire/` |
| 호우 | `GET /api/koba/setApiKbsDisasterStreamForKoba/heavyrain/` |
| 지진 | `GET /api/koba/setApiKbsDisasterStreamForKoba/eqk/` |

**Base URL**: `http://10.0.24.101:9082`
