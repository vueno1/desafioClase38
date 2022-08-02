const { 
    GraphQLObjectType, 
    GraphQLSchema
} = require("graphql");

//traigo el controlador 
const {productController} = require("./controllers/products.controller")

//esto se mostrara en graphiql para queries 
const querytype = new GraphQLObjectType({
    name: "querytype", 
    description: "queries", 
    fields: {
        ...productController.queries
    }
})

//esto se mostrar en graphiql en mutations 
const mutationtype = new GraphQLObjectType({
    name: "mutationtype", 
    description: "mutations", 
    fields: {
        ...productController.mutations
    }

})

//unifico aca lo que hice en querytype + mutationtype
const schema = new GraphQLSchema({
    query: querytype, 
    mutation: mutationtype
})

module.exports = { schema }