const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const API_HOST = '10.0.24.101';
const API_PORT = 9082;

const server = http.createServer((req, res) => {
  // HTML 서빙
  if (req.url === '/' || req.url === '/index.html') {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
      if (err) { res.writeHead(500); res.end('Server Error'); return; }
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    });
    return;
  }

  // API 프록시 — /api/* 요청을 개발 API 서버로 포워딩
  if (req.url.startsWith('/api/')) {
    const options = {
      hostname: API_HOST,
      port: API_PORT,
      path: req.url,
      method: req.method,
      headers: { ...req.headers, host: `${API_HOST}:${API_PORT}` },
    };

    const proxy = http.request(options, (apiRes) => {
      res.writeHead(apiRes.statusCode, apiRes.headers);
      apiRes.pipe(res);
    });

    proxy.on('error', (err) => {
      console.error('Proxy error:', err.message);
      res.writeHead(502);
      res.end(`API 서버 연결 실패: ${err.message}`);
    });

    req.pipe(proxy);
    return;
  }

  res.writeHead(404);
  res.end('Not Found');
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`재난 제어 서버 실행 중`);
  console.log(`  브라우저에서 열기: http://localhost:${PORT}`);
  console.log(`  API 프록시 → http://${API_HOST}:${API_PORT}`);
});
