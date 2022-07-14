const { Router } = require("express");

const {
  getProductsController,
  postProductsController,
} = require("../controllers/products.controller");

const routerProducts = new Router();

routerProducts.get("/", getProductsController);
routerProducts.post("/api/products", postProductsController);

module.exports = routerProducts;