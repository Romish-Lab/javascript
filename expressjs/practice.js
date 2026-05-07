const express = require("express");
const app = express();
const PORT = 8080;
const DB_URL = "mongodb://localhost:27017";
const mongoose = require("mongoose");
app.use(express.json());
mongoose
  .connect(DB_URL, { dbName: "team-12js" })
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log("DB connection error:", error);
  });
app.get("/", (req, res) => {
  res.send("<h1> HOMEPAGE</h1>");
});

app.get("/", (req, res) => {
  res.send("<h1> HOMEPAGE2</h1>");
});
const userRoutes = require("./routes/user.routes");

const productRoutes = require("./routes/product.routes");
//* user
app.use("/users", userRoutes);
//* products
app.use("/products", productRoutes);

app.get("/category", (req, res) => {
  res.json([
    { id: "c1", category: "car" },
    { id: "c2", category: "bike" },
  ]);
});

app.post("/category", (req, res) => {
  res.send("category created successfully");
});

app.put("/category/:id", (req, res) => {
  res.send("category updated successfully");
});

app.delete("/category/:id", (req, res) => {
  res.send("category deleted successfully");
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
