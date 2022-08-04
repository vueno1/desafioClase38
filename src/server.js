const express = require("express")
const dotenv = require("dotenv")
dotenv.config();
const routerProducts = require("./routes/products.router")
const app = express();
const path = require("path")
const exphbs = require("express-handlebars")
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const Handlebars = require('handlebars')
const MongoStore = require("./config/mongoconection")
require("./config/mongoose")
const cookieParser = require("cookie-parser")
const session = require('express-session')

// //importo el schema creado en graphql
// const {schema} = require("./graphql/index");

//servidor express que corre graphql (http)
const { graphqlHTTP } = require("express-graphql");
const { schema } = require("./graphql/schema/graphql.schema");
const {createProduct, getProducts} = require("./graphql/functions/graphql.funtions")

app.use(express.json());
app.use(express.urlencoded({ extended:true }))

app.use(cookieParser())
app.use(session({
    store: MongoStore,
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs.engine({
    handlebars: allowInsecurePrototypeAccess(Handlebars), 
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.use("/", routerProducts)

app.use(
    "/graphql", 

    graphqlHTTP({
        graphiql:true,
        schema:  schema,
        rootValue:{
            getProducts,
            createProduct
        }
    })
)

app.listen(process.env.PORT, ()=>{console.log(`escuchando puerto ${process.env.PORT}`)});
app.on("error", error => console.log(`error en servidor ${error}`));
