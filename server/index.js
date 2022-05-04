const express = require('express')
const app = express()
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

// const ip = 'localhost';

// const server = http.createServer((request, response) => {
//   console.log(
//     `http request method is ${request.method}, url is ${request.url}`
//   );
//   response.writeHead(200, defaultCorsHeader);
//   response.end('hello mini-server sprints');
// });

// server.listen(PORT, ip, () => {
//   console.log(`http server listen on ${ip}:${PORT}`);
// });

// const defaultCorsHeader = {
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'Access-Control-Allow-Headers': 'Content-Type, Accept',
//   'Access-Control-Max-Age': 10
// };