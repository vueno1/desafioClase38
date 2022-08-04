const mongoose = require("mongoose");
const productCollection = "productos"; 

// const productSchema = new mongoose.Schema({
//     nombre: {type: String, required: true, max: 100},
//     descripcion: {type: String, required: true, max: 100},
//     codigo: {type: Number, required: true, max: 100},
//     foto: {type: String, required: true, max: 100},
//     precio: {type: Number, required: true, max: 100},
//     stock: {type: Number, required: true, max: 100},
//     timestamp: {type: Date, default: Date.now()}
// });

const productSchema = new mongoose.Schema({
        nombre: {type: String},
        descripcion: {type: String},
        codigo: {type: Number},
        foto: {type: String},
        precio: {type: Number},
        stock: {type: Number},
        timestamp: {type: Date, default: Date.now()}
    });

const Product = mongoose.model(
    productCollection, 
    productSchema 
); 

module.exports = Product
