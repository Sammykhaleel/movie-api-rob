const http = require('http'),
  url = require('url'),
  fs = require('fs');

http
  .createServer((request, response) => {
    let addr = request.url,
      parse = url.parse(addr, true),
      docName = '';

    if (parse.pathname.includes('documentation')) {
      docName = __dirname + '/documentation.html';
    } else {
      docName = 'index.html';
    }

    fs.appendFile('log.txt', 'URL: ' + addr + ' ' + 'TimeStamp: ' + new Date());
  })
  .listen(8080);
