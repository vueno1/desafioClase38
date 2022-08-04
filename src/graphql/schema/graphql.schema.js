const {buildSchema} = require("graphql")

const schema = buildSchema(`

    type Producto {
        id: ID!
        nombre: String,
        descripcion: String,
        codigo: Int, 
        foto: String, 
        precio: Int, 
        stock: Int
    }

    input ProductoInput {
        nombre: String,
        descripcion: String,
        codigo: Int, 
        foto: String, 
        precio: Int, 
        stock: Int
    }

    type Query {
        getProducts(campo: String,
                    valor: String): [Producto]
    }

    type Mutation{
        createProduct(frutas: ProductoInput): Producto
    }
`)

module.exports = {schema}