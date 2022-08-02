const {
    GraphQLID, //crea un identificador unico 
    GraphQLInt, //numero entero 
    GraphQLObjectType, //crea una instancia 
    GraphQLString //tipado → string
} = require("graphql")

//creo una nueva instancia
const ProductType = new GraphQLObjectType({

    name: "Product", 
    
    description: "product type", 

    fields: () =>({
        _id: { type: GraphQLID },
        id: { type: GraphQLID },
        nombre: { type: GraphQLString },
        precio: { type: GraphQLInt },
        foto: { type: GraphQLString },
        codigo: { type: GraphQLInt },
    })
})

module.exports = {ProductType}