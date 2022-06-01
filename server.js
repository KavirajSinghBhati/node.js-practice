const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello, this is my first server since like 2020! ROFL");
  res.end();
});

server.listen(1910, () => {
  console.log("Hey, we are ready to take some requests");
});
