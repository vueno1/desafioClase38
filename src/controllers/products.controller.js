const { getProducts, createProducts } = require("../services/products.service");

async function getProductsController(req, res) {
  const products = await getProducts();
  res.render("index", {
    products: products
  })
}

async function postProductsController(req, res) {
  const products = await req.body;
  await createProducts(products);
  res.send(products)
}

module.exports = { getProductsController, postProductsController };
