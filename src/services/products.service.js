const ProductsClass = require("../daos/products.dao")
const product = new ProductsClass()

async function getProducts() {
  return await product.mostrarProducts()
}

async function createProducts(p) {
  return await product.guardarProduct(p)
}

module.exports = { getProducts, createProducts, product };
