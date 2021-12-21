const userDB = require("../modal/model");
const Joi = require('joi');
exports.createUser = (req, res) => {
    const { error } = validateCourse(req.body)
    if (error) {
        res.status(404).send({ message: 'Required Field Is mising' });
        return;
    }
    const user = new userDB({
        name: req.body.name,
        phone: req.body.phone
    })

    user.save()
        .then((data) => {
            res.redirect('/')
        })
        .catch(err => {
            res.send({ message: err })
        })

}
exports.getUser = (req, res) => {
    if (req.query.id) {
        const id = req.query.id
        userDB.findById(id)
            .then(data => {
                if (data) {
                    res.send(data)
                } else {
                    res.status(404).send("user not found")
                }
            })
            .catch(err=>{
                res.status(500).send({error: err})
            })
    } else {
        userDB.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => [
                res.status(500).send({ message: err.message || "Unable to get users" })
            ])
    }
}

exports.updateUser = (req, res) => {
    const { error } = validateCourse(req.body)
    if (error) {
        return res.status(500).send({ message: error })
    }
    const id = req.params.id;
    userDB.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "id is not found" })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ err: err })
        })
}

exports.deleteUser = (req, res) => {
    const id = req.params.id;
    userDB.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).status({ message: "user not found" })
            } else {
                res.send({ message: 'user delete succesfully' })
            }
        })
        .catch(err => {
            res.status(500).send({ err: err })
        })
}






const validateCourse = (reqBody) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        phone: Joi.string().required(),
        _id: Joi.string()
    })
    return schema.validate(reqBody)

}