//criando a HTTP
const http = require('http');
const routes = require('./routes');
const routes = require('./routes');

const routes = require('./routes');

//local host de chamada server
const server = http.createServer((request, response) => {
  console.log(`Request method: ${request.method} | Endpoint: ${request.url}`);

  const routes = routes.find((routesObj)=> (
    routesObj.enpoint === request.url && routesObj.method === request.method
  ));

  if (route) {
    route.handler(request, response);
  } else {
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.end(`Cannot ${request.method} ${request.url}`);
   }
  
  // if (request === '/users' && request.method === 'GET') {
  //   UserController.listUsers(request, response);
   
  
  //response.writeHead(200, {'Content-Type': 'text/html'});
  //response.end('<h1>Hello world!</h1>');
});

server.listen(3000, () => console.log ('😎Server started at http://localhost:3000'));