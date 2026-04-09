# disaster-control

재난 스트림 API를 트리거하는 태블릿용 제어 페이지입니다.

## 사용 방법

1. `index.html` 파일을 태블릿으로 복사
2. 브라우저로 파일 열기
3. 버튼 클릭 → API 호출

> 태블릿이 `10.0.24.101` 서버와 같은 네트워크에 있어야 합니다.

## 기능

- 버튼 4개로 KBS 재난 스트림 API 호출 (reset / 산불 / 호우 / 지진)
- 호출 성공/실패 토스트 메시지 표시
- 호출 중 버튼 비활성화 (중복 클릭 방지)

## API 엔드포인트

| 버튼 | 엔드포인트 |
|---|---|
| reset | `POST /api/koba/setApiKbsDisasterStreamForKoba/reset/` |
| 산불 | `POST /api/koba/setApiKbsDisasterStreamForKoba/wildfire/` |
| 호우 | `POST /api/koba/setApiKbsDisasterStreamForKoba/heavyrain/` |
| 지진 | `POST /api/koba/setApiKbsDisasterStreamForKoba/eqk/` |

**Base URL**: `http://10.0.24.101:9082`
