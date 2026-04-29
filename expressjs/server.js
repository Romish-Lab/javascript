const http = require("http");
const express = require("express");

const PORT = 8080;

//! creating server using http module
// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   //   res.end("hello world");

//   const url = req.url;
//   switch (url) {
//     case "/": {
//       res.end("<h1>homepage</h1>");
//       break;
//     }
//     case "/users": {
//       res.end("<h1>Users</h1>");
//       break;
//     }
//     default: {
//       res.end("<h1>default</h1>");
//     }
//   }
// });

//! express setup
//* rest api => GET, POST, PUT/PATCH, DELETE

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>homepage</h1>");
});
//* read

app.get("/users", (req, res) => {
  res.json([
    {
      name: "john",
      age: 19,
      email: "john@gmail.com",
    },
  ]);
});

app.get("/products", (req, res) => {
  // res.send('<h1> userpage</h1>')//* it already ends the response
  res.json([
    {
      id: 1,
      name: "p1",
      price: 2000,
    },
    {
      id: 2,
      name: "p2",
      price: 3000,
    },
  ]);
});

app.get("/categories", (req, res) => {
  res.json([
    {
      c_id: 1,
      name: "foods",
    },
    {
      c_id: 2,
      name: "drinks",
    },
  ]);
});
//! create
app.post("/users", (req, res) => {
  res.json([
    {
      message: "user created",
    },
  ]);
});

//! update

app.put("/users", (req, res) => {
  res.json([
    {
      message: "user updated",
    },
  ]);
});

app.delete("/users", (req, res) => {
  res.json({
    message: "user deleted",
  });
});
//! start server
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
  console.log("press CTRL+C to close server");
});
