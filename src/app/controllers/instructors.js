const Instructor = require('../models/Instructor.js')

module.exports = {
    index(req, res) {
        Instructor.all(function(instructors) {
            return res.render('instructors/index', { instructors })
        })               
    },
    create(req, res) {
        return res.render('instructors/create')
    },
    post(req, res) {
        // req.query || req.body
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "")
                return res.send("Please, fill all the fields")
        }

        Instructor.create(req.body, function(instructor) {
            return res.redirect(`/instructors/${instructor.id}`)
        })        
    },
    show(req, res) {
        return
    },
    edit(req, res) {
        return
    },
    put(req, res) {
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "")
                return res.send("Please, fill all the fields")
        }

        let {avatar_url, birth, name, services, gender} = req.body

        return
    },
    delete(req, res) {
        return
    },
}