const fs = require('fs')
const data = require('./data.json')

// Create
exports.post = function(req, res) {
    // req.query || req.body

    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "")
            return res.send("Please, fill all the fields")
    }

    data.instructors.push(req.body)

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("Write file error!")

        return res.redirect("/instructors")
    })

    //return res.send(req.body)
}

// Update

// Delete