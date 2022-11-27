const http = requeri('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, {'Cintent-Type': 'text/html'});
  response.end('<h1>Hello world!</h1>');
});

server.listen(3000, () => console.log ('😎Server started at http://localhost300'));