# disaster-control

재난 스트림 API를 트리거하는 태블릿용 제어 페이지입니다.

## 구조

```
태블릿 브라우저 → Linux서버:3000 (server.js)
                       ↓ 프록시
              10.0.24.101:9082 (개발 API 서버)
```

CORS 문제를 프록시 서버로 완전 우회합니다.

## Linux 서버 설정

### 1. 프로젝트 클론

```bash
git clone https://github.com/kimmegi/megi-claude-code-project.git
cd megi-claude-code-project/disaster-control
```

### 2. 서버 실행

```bash
node server.js
```

Node.js가 없으면 먼저 설치:
```bash
# Ubuntu/Debian
sudo apt update && sudo apt install nodejs

# CentOS/RHEL
sudo yum install nodejs
```

### 3. 태블릿에서 접속

태블릿 브라우저에서:
```
http://[Linux서버IP]:3000
```

### 백그라운드 실행 (선택)

```bash
nohup node server.js &
```

종료할 때:
```bash
pkill -f server.js
```

## API 엔드포인트

| 버튼 | 엔드포인트 |
|---|---|
| reset | `GET /api/koba/setApiKbsDisasterStreamForKoba/reset/` |
| 산불  | `GET /api/koba/setApiKbsDisasterStreamForKoba/wildfire/` |
| 호우  | `GET /api/koba/setApiKbsDisasterStreamForKoba/heavyrain/` |
| 지진  | `GET /api/koba/setApiKbsDisasterStreamForKoba/eqk/` |

**API 서버**: `http://10.0.24.101:9082`
