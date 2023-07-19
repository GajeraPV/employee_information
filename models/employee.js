const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    gender: {
        type: String,
        required: true,
    },
    marital_status: {
        type: String,
        required: true,
    },
    marriage_date: {
        type: String
    },
    salary: {
        type: String,
        required: true,
    },
    country_id: {
        type: ObjectId,
        ref: 'countries'
    },
    state_id: {
        type: ObjectId,
        ref: 'states'
    },
    hobbies: {
        type: Array
    },
    status: {
        type: String,
        required: true
    }
})

employeeSchema.set('collection', 'employee')

module.exports = mongoose.model('employee', employeeSchema)