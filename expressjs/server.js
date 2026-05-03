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

// /users/1
//* params
app.get("/users/:id", (req, res) => {
  console.log(req.params)
  const id= req.params.id
  res.json([
    {
      id:id,
      name: "john1",
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

//* REST API

//? REST=> Representational State Transfer
//* client server

//* stateless=> The server does not remember anything about previous requests from a client.

//* response is cacheable

//* layered system=> The API is designed in multiple layers, and each layer has a specific responsibility, with no direct knowledge of other layers beyond the one it interacts with.

//! API=> Application Programming Interface

//! resource in REST API=> Any data or object that the API exposes and can be identified using a URI (URL).

//! endpoint => path defined to access resource (/user)
// collections
//   users
//   /products

// single resource
//  /users/1
//! route=> A route is a combination of an HTTP method and a URL path that maps to a handler function to process client requests in a REST API.

//! representation=> the format in which resourse is transferred between client and server(json)

//! REST uses standard htttp req methods
//* GET=> get any req/query
//* POST=> create new data
//* PUT(to replace whole data)/PATCH(to replace a certain part of data)=> update data
//* DELETE=> remove any data/resource

//! REST uses standard http response status code
//* 100-599(status code range)
//? 100-199=> informational response
//? 200-299=> succcessful response
//? 300-399=> redirection response
//? 400-499=> client side error
//? 500-599=>server side error

//* unform interface
// never use noun while defining endpoint
// url name should be plural
// if noun should be used use - (get-user)

//! parameters
//* search/query params=> req.query=>{name:"",email:""}
// http:// localhose:/users?name=john
// * route params=>

  //? users/1=> /users/:id=> req.params={id:1}
   //? users/1000=> /users/:id=> req.params={xyz:1000}