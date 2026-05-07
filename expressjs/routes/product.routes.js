const {
  getproducts,
  deleteproducts,
  updateproducts,
  postproducts,
  getproductbyid,
} = require("../products/product.controller");
const express = require("express");
const router = express.Router();

router.get("/", getproducts);

router.get("/", postproducts);

router.get("/:id", updateproducts);

router.get("/:id", deleteproducts);

module.exports = router;
