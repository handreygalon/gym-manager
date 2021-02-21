// Create
exports.post = function(req, res) {
    // req.query || req.body

    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "")
            return res.send("Please, fill all the fields")
    }

    return res.send(req.body)
}

// Update

// Delete