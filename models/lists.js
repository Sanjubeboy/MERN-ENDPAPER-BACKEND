const mongoose = require('mongoose')

const listSchema = new mongoose.Schema({
    listName:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    }
})

module.exports  = mongoose.model('listModel', listSchema)