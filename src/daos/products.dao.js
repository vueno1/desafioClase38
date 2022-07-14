const Container = require("../class/container")
const ProductModel = require("../model/product.model")

module.exports = class ProductsClass extends Container {
    constructor(){
        super(ProductModel)
    }
}
