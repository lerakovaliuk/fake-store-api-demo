const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname.replace(/^\/+|\/+$/g, '');

  if (path === 'is-32fiot-23-101') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <html>
        <head><title>Особисті дані</title></head>
        <body style="font-family: sans-serif; padding: 20px;">
          <h1>Особисті дані студента</h1>
          <ul>
            <li><strong>Прізвище:</strong> Ковалюк</li>
            <li><strong>Ім’я:</strong> Валерія</li>
            <li><strong>Курс:</strong> 2</li>
            <li><strong>Група:</strong> ІС-32</li>
          </ul>
        </body>
      </html>
    `);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h2>Сторінку не знайдено!</h2>');
  }
});

server.listen(3000, () => {
  console.log('Сервер запущено на http://localhost:3000');
});