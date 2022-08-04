const {product} = require("../../services/products.service")

async function getProducts() {
    try{
        return await product.mostrarProducts()   
    }catch(e){
        console.log(e.message);
    }
}

async function createProduct(p) {
    try {
        const misProductos = await product.guardarProduct(p)
        console.log(p)
        return misProductos 
    }catch(e){
        console.log(e.message);
    }
}

module.exports = {getProducts, createProduct}