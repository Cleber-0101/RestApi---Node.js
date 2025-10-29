const express = require('express')

const server = express()

//Req query params 
server.get('/curso', (req,res) => {
    const nome = req.query.nome
    return res.json({Curso: `Curso de ${nome}`})
})

//Req params
// localhost:3000/curso/2
server.get('/curso/:id' , (req,res) => {
    const id = req.params.id
    return res.json({curso: `Curso ${id}`})
})

server.listen(3000)