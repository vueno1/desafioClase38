const {
    GraphQLFloat,
    GraphQLList,
    GraphQLNonNull,
    GraphQLString
} = require("graphql")

//importo type
const {ProductType} = require("../types/products.types")

//importo los metodos de mi clase 
const {product} = require("../../services/products.service")

//traer todos los productos 
const getProducts = {
    
    type: new GraphQLList(ProductType),

    description: "return a string", 

    resolve: async() =>{
        const productos = await product.mostrarProducts()
        return productos
    }
}

//mutacion - guardo productos
const guardarProduct = {

    type:ProductType,

    args: {
        nombre: { type: new GraphQLNonNull(GraphQLString) },
        precio: { type: new GraphQLNonNull(GraphQLFloat) },
        foto: { type: new GraphQLNonNull(GraphQLString) },
        codigo: { type: new GraphQLNonNull(GraphQLString) },
    }, 

    resolve: async ({nombre, precio, foto, codigo}) =>{

        const respuesta = await product.guardarProduct({
            nombre, 
            precio, 
            foto, 
            codigo
        })

        return respuesta
    }
}

//unifico en una constante mutations + queries
const productController = {
    mutations: {
        guardarProduct,
    },

    queries: {
        getProducts
    }
}

module.exports = {productController}