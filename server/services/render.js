const axios = require("axios")

exports.HomeRoute = (req, res) => {
    axios.get('http://localhost:4000/api/getUsers')
    .then(responce=>{
        res.render("index",{users:responce.data})
    })
    .catch(err=>{
        res.status(500).send({error:"there is an error"})
    })
}
exports.addUser = (req, res) => {
    res.render("addUser")
}
exports.updateUser = (req, res) => {
    axios.get('http://localhost:4000/api/getUsers?id='+req.query.id)
    .then(responce=>{
        res.render("updateUser",{user:responce.data})
    })
    .catch(err=>{
        res.status(500).send({error:"there is an error"})
    })
}