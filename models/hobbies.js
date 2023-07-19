const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hobbiesSchema = new Schema({
    hobbies_name: {
        type: String
    }
})

hobbiesSchema.set('collection', 'hobbies')

module.exports = mongoose.model('hobbies', hobbiesSchema)