//1° //
const express = require('express');
//2°//
const app = express()
//3°//
app.use(express.json());
//4°//
app.listen(3000 , () => {
    console.log("servidor iniciado")
})
//==============CRIAR APIs===============================
// GET / GET BY ID // POST // PUT // DELETE.

app.get('/usuarios' , (req,res) => {
    console.log("APi GET todos")
    res.status(200).send("todos os usuarios")
})
app.get('/usuarios/:id', (req,res) => {
console.log("api get por id")
res.status(200).send(req.params.id)
})
app.post('/usuarios' , (req , res ) => {
console.log("API post usuario")
res.status(200).send(req.body)
})
app.put('/usuarios/:id') , (req,res) => {
    console.log("adicionando e atualizando o id")
    res.status(200).send(req.params.id)
}
app.delete('/usuarios/:id') , (req,res) => {
    console.log("deletando o id")
    res.status(200).send(req.params.id)
}