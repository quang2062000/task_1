const mongoose = require('mongoose')
const Schema = mongoose.Schema
const companyModel = new Schema({
    name:String,
    address: String,
    numberOfEmoloyees : Number,
    creationDate: String
})
module.exports = mongoose.model('company', companyModel)