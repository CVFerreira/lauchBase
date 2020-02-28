// importando modulos
const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const methodOverride = require('method-override')

const server = express()

// o use é um midware
server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))
server.use(methodOverride('_method'))
server.use(routes)

//configurando view engine para servir arquivos nunjucks
server.set("view engine", "njk")

//configurando a template engine, passando pasta dos arquivos e qual o servidor esta sendo utilizado
nunjucks.configure("src/app/views", {
    express:server,
    autoescape: false,
    noCache: true
})
// configurando rota inicial do servidor

// configuração de porta onde o servidro irá responder
server.listen(5000, function(){
    console.log('server is running');   
})
