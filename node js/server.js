//! http
const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url);
  //   res.end("hello world");

  const url = req.url;
  switch (url) {
    case "/": {
      res.end("<h1>homepage</h1>");
      break;
    }
    case "/users": {
      res.end("<h1>Users</h1>");
    }
    default: {
      res.end("<h1>default</h1>");
    }
  }
});

server.listen(8080, () => {
  console.log(`server is running at http://localhost:8080`);
  console.log("press ctrl+c to close server");
});

//!express js
