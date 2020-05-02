const http = require('http');
let sum = 0;
const server = http.createServer((req, res) => {
  req.on('error', (err) => {
    console.error(err);
    // Handle error...
    res.statusCode = 400;
    res.end('400: Bad Request');
    return;
  });

  res.on('error', (err) => {
    console.error(err);
    // Handle error...
  });
  console.log(req.url);
  res.statusCode = 200;

  if (req.url === '/' && req.method === 'POST') {
    // console.log('here');
    let body = [];
    req
      .on('data', (chunk) => {
        body.push(chunk);
      })
      .on('end', () => {
        body = Buffer.concat(body).toString();
        // console.log('body', body);
        sum += Number(body);
        res.end(sum.toString());
        // at this point, `body` has the entire request body stored in it as a string
      });
  } else if (req.url === '/count' && req.method === 'GET') {
    // console.log('sum', sum);
    res.end(''+sum);
  } else {
    res.statusCode = 404;
    res.end('404: File Not Found');
  }
});

server.listen(80, () => {
  console.log('Example app listening on port 8080!');
});
