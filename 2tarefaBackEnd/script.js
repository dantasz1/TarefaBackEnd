const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, () => {
console.log("servidor iniciado")
} )
const alunos = []
app.get('/alunos', (req, res) => {
    console.log("api get todos os alunos")
    res.status(200).send(alunos)
})
app.get('/alunos/:id' , (req , res) => {
console.log("api de um aluno especifico")
const aluno = alunos.find(x => x.id == req.params.id)     // o find é uma função de array em js usada para encontrar o primeiro elemento em um array
res.status(200).send(aluno)                               // que faça a condição fornecida.Nesse caso o find para procurar um objeto no array alunos.
})
app.post('/alunos', (req , res) => {
    alunos.push(req.body)
    res.status(200).send('cadastrado com sucesso')
})
app.put('/alunos/:id' , (req , res) => {
    const aluno = alunos.find(x => x.id == req.params.id) 
const idAluno = alunos.indexOf(aluno)
alunos[idAluno] = req.body
res.status(200).send("Aluno atualizado com sucesso")
})
app.delete('/alunos/:id', (req , res )=> {
    const aluno = alunos.find(x => x.id == req.params.id) 
const idAluno = alunos.indexOf(aluno)
alunos.splice(idAluno,1)
res.status(200).send("Aluno deletado com sucesso")
})