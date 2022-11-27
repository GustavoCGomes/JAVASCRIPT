const  http = require('http');

const users = require(`./mocks/users`);

// Criando o servidor
const server = createServer((request, response) => {
  console.log(`Request method: ${request.method} | Endpoint: ${request.url}`);

  if(request.url === '/users' && request.method === 'GET'){
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(users));
  } else {
      response.writeHead(404, { 'Content-Type': 'text/html' });
      response.end(`Cannot ${request.method} ${request.url}`);
    }
  //response.writeHead(200, { 'Content-Type': 'text/html' });
  //response.end('<h1>Hello world!</h1>')
});

server.listen(3000, () => {
  return console.log('😎 Server started at http://localhost:3000');
});