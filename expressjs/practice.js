const express = require("express");
const PORT = 8080;
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>homepage</h1>");
});

app.get("/user", (req, res) => {
  res.json([
    {
      id: 1,
      name: "john",
      email: "john@gmail.com",
      password: 12345,
    },
    {
      id: 2,
      name: "bihari",
      email: "bihari@gmail.com",
      password: 12345,
    },
    {
      id: 3,
      name: "bahun",
      email: "bahun@gmail.com",
      password: "qwerty1234",
    },
  ]);
});

//! user
//* create
app.post("/user", (req, res) => {
  res.send("user created successfully");
});

//* update
app.put("/user", (req, res) => {
  res.send("user updated successfully");
});

//* delete
app.delete("/user", (req, res) => {
  res.send("user deleted successfully");
});

app.get("/products", (req, res) => {
  res.json([
    {
      id: "p1",
      name: "car",
      model: "c1",
      mfd: "2022-01-01",
    },
    {
      id: "p2",
      name: "bike",
      model: "m1",
      mfd: "2020-09-09",
    },
  ]);
});

//! products
//* create
app.post("/products", (req, res) => {
  res.send("products created successfully");
});

//* update
app.put("/products", (req, res) => {
  res.send("products updated successfully");
});

//* delete
app.delete("/products", (req, res) => {
  res.send("products deleted successfully");
});

app.get("/category", (req, res) => {
  res.json([
    {
      id: "c1",
      category: "car",
    },
    {
      id: "c2",
      category: "bike",
    },
  ]);
});

//! category
//* create
app.post("/category", (req, res) => {
  res.send("category created successfully");
});

//* update
app.put("/category", (req, res) => {
  res.send("category updated successfully");
});

//* delete
app.delete("/category", (req, res) => {
  res.send("category deleted successfully");
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
  console.log("Press CTRL+C to close server");
});