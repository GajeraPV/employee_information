const mongoose = require('mongoose')
const Schema = mongoose.Schema

const countriesSchema = new Schema({
    country_name: {
        type: String,
        required: true
    }
})

countriesSchema.set('collection', 'countries')

module.exports = mongoose.model('countries', countriesSchema)