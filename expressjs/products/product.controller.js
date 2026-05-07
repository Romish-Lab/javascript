let products = [
  {
    id: 1,
    name: "Laptop",
    price: 80000,
  },
  {
    id: 2,
    name: "Phone",
    price: 30000,
  },
];

//* GET all products
exports.getproducts = (req, res) => {
  res.status(200).json(products);
};

//* GET product by ID
exports.getproductbyid = (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
};

//* CREATE product
exports.postproducts = (req, res) => {
  const newProduct = {
    id: products.length + 1,
    ...req.body,
  };

  products.push(newProduct);

  res.status(201).json({
    message: "Product created successfully",
    data: newProduct,
  });
};

//* UPDATE product
exports.updateproducts = (req, res) => {
  const id = parseInt(req.params.id);

  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products[index] = {
    ...products[index],
    ...req.body,
  };

  res.json({
    message: "Product updated successfully",
    data: products[index],
  });
};

//* DELETE product
exports.deleteproducts = (req, res) => {
  const id = parseInt(req.params.id);

  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  const deletedProduct = products.splice(index, 1);

  res.json({
    message: "Product deleted successfully",
    data: deletedProduct,
  });
};
