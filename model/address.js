import mongoose from 'mongoose'

const addressSchema = new mongoose.Schema({
    type: String,
    address_type: String,
    map: String,
    address1: Number,
    address2: String,
    pin: String,
    phone_country: String,
    phone_no: String,
    site_id: String,
    status: Boolean
})

const Address = mongoose.model("Address", addressSchema)
module.exports = Address