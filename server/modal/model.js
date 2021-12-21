const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
        unique:true
    }

})

const userDB = mongoose.model('users_col_name', schema)

module.exports = userDB