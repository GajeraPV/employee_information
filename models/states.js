const mongoose = require('mongoose')
const countries = require('./countries')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId


const statesSchema = new Schema({
    state_name: {
        type: String
    },
    country_id: {
        type: ObjectId,
        ref: 'countries'
    }
})

statesSchema.set('collection', 'states')

module.exports = mongoose.model('states', statesSchema)