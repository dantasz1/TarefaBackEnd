


const express = require('express');
const app = express();
app.use(express.json());
app.listen(3000, () => {
console.log("servidor iniciado")
} )
const db = require ('./database')

const dataB = db.AlunosDatabase()



app.get('/alunos',async (req, res) => {
    res.status(200).send( await dataB.list())
})
app.get('/alunos/:id' , async (req , res) => {    
res.status(200).send(await dataB.get(req.params.id))                               
})
app.post('/alunos',async  (req , res) => {
    dataB.insert(await req.body)
    res.status(200).send("Aluno inserido")
})
app.put('/alunos/:id' ,async (req , res) => {
    dataB.update( await req.body,req.params.id)
res.status(200).send("aluno atualizado")
})
app.delete('/alunos/:id', async (req , res )=> {
   dataB.delete( await req.params.id)
res.status(200).send("Aluno deletado com sucesso")
})