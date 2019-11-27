// importando modulos
const express = require('express')
const nunjucks = require('nunjucks')
const videos = require('./data')

// criando variavel que executa o servidor express
const server = express()

// configurando servidor para utilizar arquivos estaticos
server.use(express.static('public'))

//configurando view engine para servir arquivos nunjucks
server.set("view engine", "njk")

//configurando a template engine, passando pasta dos arquivos e qual o servidor esta sendo utilizado
nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
})
// configurando rota inicial do servidor
server.get("/", function(req, res){
    const about ={
        avatar_url: "https://avatars0.githubusercontent.com/u/20914246?s=400&u=2c24a5a48016a7501a4c78a0935f89737605594c&v=4",
        name: "Caio Ferreira",
        role: "Next JavaScript Developer",
        description: 'JavaScript programming student, prepared to become a developer through the Launch Base of course <a href="https://rocketseat.com.br/" target="blank">Rocketseat</a>',
        links:[
            {name: "Github", url: "https://github.com/CVFerreira"},
            {name: "Twitter", url: "https://twitter.com/cf_aska"},
            {name: "linkedin", url: "https://www.linkedin.com/in/caio-vinicius-alves-ferreira-a08b70140/"}
        ]
    }
    // enviando renderização da view
    return res.render("about", { about })
})

// configurando rota do portifolio
server.get("/portifolio", function(req, res){
    // enviando renderização da view
    return res.render("portifolio", { items: videos })
})

//redirecionamento do vídeo do portifólio para outra pagina
server.get("/video", function(req, res){
// pegando o ID passado na url
    const id = req.query.id
// percorre o array de videos e pega cada video passado
    const video = videos.find(function(video){
        return video.id == id
    })
    
    if (!video){
        return res.send("Video not found!")
    }

    return res.render("video", { item: video })
})

// configuração de porta onde o servidro irá responder
server.listen(5000, function(){
    console.log('server is running');   
})
