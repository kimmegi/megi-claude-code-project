# disaster-control

재난 스트림 API를 트리거하는 안드로이드 태블릿용 제어 페이지입니다.

## 구조

```
태블릿 브라우저 → localhost:3000 (server.js)
                       ↓ 프록시
              10.0.24.101:9082 (개발 API 서버)
```

CORS 문제를 프록시 서버로 완전 우회합니다.

## 안드로이드 태블릿 설정

### 1. Termux 설치
- [F-Droid](https://f-droid.org)에서 Termux 설치 (Google Play 버전 X)

### 2. Node.js 설치
```bash
pkg update && pkg upgrade
pkg install nodejs
```

### 3. 파일 복사
`disaster-control/` 폴더를 태블릿으로 복사 (`index.html`, `server.js`)

### 4. 서버 실행
```bash
cd disaster-control
node server.js
```

### 5. 브라우저에서 열기
```
http://localhost:3000
```

## API 엔드포인트

| 버튼 | 엔드포인트 |
|---|---|
| reset | `GET /api/koba/setApiKbsDisasterStreamForKoba/reset/` |
| 산불  | `GET /api/koba/setApiKbsDisasterStreamForKoba/wildfire/` |
| 호우  | `GET /api/koba/setApiKbsDisasterStreamForKoba/heavyrain/` |
| 지진  | `GET /api/koba/setApiKbsDisasterStreamForKoba/eqk/` |

**API 서버**: `http://10.0.24.101:9082`
