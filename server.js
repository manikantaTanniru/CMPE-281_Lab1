const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Working as expected!');
  res.end(’This is a successful message’);
  res.end(‘Node App’);
}

const server = http.createServer(requestListener);
server.listen(8080);
console.log('Server is successfully running');