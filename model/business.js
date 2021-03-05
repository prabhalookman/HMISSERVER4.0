import {Schema, model} from 'mongoose'

const businessSchema = new Schema({
    site_id: String,
    type: String,
    name: String,
    size: Number,
    availability_type: String,
    createdOn_utc: String,
    billingAddress: String,
    shipppingAddress: String,
    phone_country: String,
    phone_no: String,
    url: String,
    addresses: [String],
    category_ids: [String],
    timings: {        
        timing:[
            {
                id: String,
                work_day_id: String,
                work_day_name: String,
                index: String,
                name: String,
                start_time: String,
                end_time: String,
                is_day_off: Number,
                is_special_day: Number,
                special: Number,
                availability_type_id: String,
                location: String,
                data_source: String,
                breaktime: [
                    {
                        start_time: String,
                        start_hour: String,
                        start_minute: String,
                        end_time: String,
                        end_hour: String,
                        end_minute: String
                    }
                ],
                work_day_duration: Number
            }
        ]        
    }
})

const Business = model("Business", businessSchema)
module.exports = Business;