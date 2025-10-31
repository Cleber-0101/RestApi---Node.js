const express = require('express')

const server = express()

//Req query params 
server.get('/teste', (req,res) => {
    const nome = req.query.nome
    return res.json({Curso: `Curso de ${nome}`})
})

//Req params
//localhost:3000/curso/2
server.get('/teste/:id' , (req,res) => {
    const id = req.params.id
    return res.json({cai_aqui : `teste ${id}`})
})

const nomesFamilia = ["cleber" ,"jessica" , "Nour Batista"];

//Req Body
server.get('/nomes/:index', (req,res) => {
    const { index } = req.params;
    //pega item da lista a partir do seu indexador
    return res.json(nomesFamilia[index]);
})

server.listen(3000)



