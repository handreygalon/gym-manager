const express = require('express')
const nunjuncks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjuncks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    const about = {
        avatar: "https://avatars1.githubusercontent.com/u/19215767?s=460&u=160c2ec1907118fa09342f84a814fcf7e8c91828&v=4",
        name: "Handrey Emanuel Galon",
        role: "Student - Rocketseat",
        description: '<a href="https://rocketseat.com.br" target="_blank">Rocketseat</a> launchbase bootcamp student aiming to fit into the market as a full-stack developer.',
        links: [
            { name: "Github", url: "https://github.com/handreygalon" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/handrey-emanuel-galon" },
            { name: "Facebook", url: "https://www.facebook.com/handrey.emanuel/" }
        ] 
    }

    return res.render("about", { about })
})

server.get("/portfolio", function(req, res) {
    return res.render("portfolio", { items: videos })
})

server.get("/video", function(req, res) {
    const id = req.query.id
    const video = videos.find(function(video) {
        return video.id == id
    })

    if (!video) {
        return res.send("Video not found!")
    }
    
    return res.render("video", { item: video })
})

/*server.get("/video/:id", function(req, res) {
    const id = req.params.id;
    //return res.send(`O id fornecido na rota é: ${id}`);
    const video = videos.find(function(video) {
        return video.id == id.split('=')[1]
    })

    if (!video) {
        return res.send("Video not found!")
    }
    
    return res.render("video", { item: video })
})*/

server.use(function(req, res) {
    res.status(404).render("not-found");
});

server.listen(5000, function() {
    console.log("Server is running!")
})