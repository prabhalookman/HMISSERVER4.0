import { Schema, model, Types } from 'mongoose'

const passwordSchema = new Schema({
    user_id: String,
    password: String,
    password_format_id: Number,
    password_salt: String,
    createdOn_Utc: String,
    password_change_dateUtc: String,
    status: Boolean
})

const Password = model("Password", passwordSchema)
module.exports = Password