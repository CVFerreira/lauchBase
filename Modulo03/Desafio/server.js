const express = require('express')
const nunjucks = require('nunjucks')
const recipes = require('./data')

const server = express()

server.use(express.static('public'))
// server.use(express.static('assets'))


server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){  
    return res.render("index", {items: recipes})    
})

server.get("/receitas", function (req, res){
    return res.render("receitas", {items: recipes} )
    
})

server.get("/sobre", function (req, res){
    return res.render("sobre")
})

server.get("/recipes/:index", function (req,res){
    
    const {index: recipeIndex}= req.params
    const recipe= recipes[recipeIndex]


    if(!recipe){
        return res.send("Recipe not found!")
    }

    return res.render("recipe", { item: recipe })
})

server.listen(5000, function(){
    console.log('server is running');   
})