import { number } from '@hapi/joi'
import mongoose from 'mongoose'

const siteSchema = new mongoose.Schema({
    DefaultLanguageId: String,
    DisplayOrder: Number,
    DisplayName: String,
    status: Boolean
})

const Site = mongoose.model('Site', siteSchema)
module.exports = Site;