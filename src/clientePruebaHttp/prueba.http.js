const express = require("express")
const axios = require("axios")
const app = express()

const url = "http://localhost:8080"

app.get("/mostrarProductos", async (req,res) =>{
    try{
        const response = await axios.get(url)
        res.send(response.data)

    }catch(e) {
        console.log(e.message);
    }
})

app.get("/ingresarProductos", async (req,res) =>{
    try{
        await axios.post(`${url}/api/products`, {

            nombre:"banana", 
            descripcion: "monkkkk", 
            codigo: 33, 
            foto: "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_maca-128.png" ,
            precio: 15,
            stock: 20  

        })
        res.send("producto ingresado")

    }catch(e) {
        console.log(e.message);
    }
})


app.listen(3000, console.log(
    "servidor de testeo con AXIOS → port = 3000"
))