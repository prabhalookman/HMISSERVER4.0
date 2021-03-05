import { Schema, model, Mongoose } from 'mongoose'

const categorySchema = new Schema({
    category_name: String,
    parant_category_id: String,
    icon: String,
    icon_path: String,
    type: String,
    type_group: {
        site_id: String
    },
    active: Boolean,
    deleted: Boolean,
    created_onUtc: String,
    modified_onUtc: String,
    status: Boolean
})

const Category = model('Category', categorySchema)
module.exports = Category