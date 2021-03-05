import mongoose from 'mongoose'

const roleSchema = new mongoose.Schema({
    Name: String,
    DisplayOrder: Number,
    Created_onUtc: String,
    site_id: String,
    status: Boolean
})

const Role = mongoose.model("Role", roleSchema)
module.exports = Role;