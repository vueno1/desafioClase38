const chai = require("chai")
const chaiHttp = require("chai-http")
const expect = require("chai").expect

chai.use(chaiHttp)
const url = "http://localhost:8080"

describe('guardar los productos', () => {
    it("debe ingresar un producto", (done) =>{
        chai.request(url)
            .post("/api/products")
            .send({
                nombre:"manzana", 
                descripcion: "pepe apple", 
                codigo: 44, 
                foto: "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_maca-128.png" ,
                precio: 20,
                stock: 25
            })
            //RESPUESTA DEL SERVIDOR
            .end(function(err, res) {
                console.log(res.body)
                expect(res).to.have.status(200)
                done()
            })
    })
});

describe("recibir todos mis productos", () =>{
    it("deberia traerme todos los productos", (done) =>{
        chai.request(url)
            .get("/")

            //RESPUESTA DEL SERVIDOR
            .end(function(err,res){
                console.log(res.body);
                expect(res).to.have.status(200)
                done()
            })
    })
})


