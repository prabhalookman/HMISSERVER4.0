import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    user_name: String,
    first_name: String,
    last_name: String,
    email: String,
    user: String,
    password_id: String,
    sex: String,
    password_format_id: Number,
    password_salt: String,
    position: String,
    avatar: String,
    avatar_path: String,
    color_code: Number,
    display_name: String,
    title: String,
    sms_notifications_on: String,
    email_notifications_on: String,
    push_notifications_on: String,
    country_name: String,
    mobile_number: String,
    teams_view_filter: String,
    calendar_sync_id: String,
    email_signature: String,
    affiliate_id: String,
    site_id: String,
    business_id: String,
    active: Boolean,
    deleted: Boolean,
    failed_login_attempts: Number,
    Cannot_login_until_dateUtc: String,
    LastIpAddress: String,
    url_referrer: String,
    Created_onUtc: String,
    last_login_dateUtc: String,
    last_activity_dateUtc: String,
    account_create: Boolean,
    user_type: String,
    time_Zone: String,
    last_ip_address: String,
    user_roles: [{ _id: String }],
    assign: {
        interactions: Boolean,
        booking: Boolean
    },
    purchase: Boolean,
    login_type: [{ _id: String }],
    BillingAddress: String,
    ShippingAddress: String,
    Addresses: [],
    timings: {
        timing: [
            {
                work_day_id: String,
                work_day_name: String,
                index: Number,
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
                        start_hour: Number,
                        start_minute: Number,
                        end_time: String,
                        end_hour: Number,
                        end_minute: Number
                    }
                ],
                work_day_duration: Number
            }
        ]
    },
    status:Boolean
})

const User = model("User", userSchema)
module.exports = User