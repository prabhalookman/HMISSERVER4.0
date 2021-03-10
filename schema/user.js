import { gql } from 'apollo-server-express';

export default gql`

type user {
    _id: ID,
    user_name: String,
    first_name: String,
    last_name: String,
    email: String,
    user: String,
    password_id: String,
    sex: String,
    password_format_id: Int,
    password_salt: String,
    position: String,
    avatar: String,
    avatar_path: String,
    color_code: Int,
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
    failed_login_attempts: Int,
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
    user_roles: [userroles],
    assign: assign,
    purchase: Boolean,
    login_type: [login_type],
    BillingAddress: String,
    ShippingAddress: String,
    Addresses: [String],
    user_timings: user_timings,
    status:Boolean
}

type login_type { _id: String }

type userroles { _id: String },

type assign {
    interactions: Boolean,
    booking: Boolean
},

type user_timings {
    timing: [user_timing]
}

type user_timing {
    work_day_id: String,
    work_day_name: String,
    index: Int,
    name: String,
    start_time: String,
    end_time: String,
    is_day_off: Int,
    is_special_day: Int,
    special: Int,
    availability_type_id: String,
    location: String,
    data_source: String,
    breaktime: [user_breaktime],
    work_day_duration: Int
}

type user_breaktime {
    start_time: String,
    start_hour: Int,
    start_minute: Int,
    end_time: String,
    end_hour: Int,
    end_minute: Int
}

input userInput {
    _id: ID,
    user_name: String,
    first_name: String,
    last_name: String,
    email: String,
    user: String,
    password_id: String,
    sex: String,
    password_format_id: Int,
    password_salt: String,
    position: String,
    avatar: String,
    avatar_path: String,
    color_code: Int,
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
    failed_login_attempts: Int,
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
    user_roles: [user_roleInput],
    assign: assignInput,
    purchase: Boolean,
    login_type: [login_typeInput],
    BillingAddress: String,
    ShippingAddress: String,
    Addresses: [String],
    user_timings: user_timingsInput,
    status:Boolean
}

input login_typeInput { _id: String }

input user_roleInput { _id: String },

input assignInput {
    interactions: Boolean,
    booking: Boolean
}

input user_timingsInput {
    timing: [user_timingInput]
}

input user_timingInput {
    work_day_id: String,
    work_day_name: String,
    index: Int,
    name: String,
    start_time: String,
    end_time: String,
    is_day_off: Int,
    is_special_day: Int,
    special: Int,
    availability_type_id: String,
    location: String,
    data_source: String,
    breaktime: [user_breaktimeInput],
    work_day_duration: Int
}

input user_breaktimeInput {
    start_time: String,
    start_hour: Int,
    start_minute: Int,
    end_time: String,
    end_hour: Int,
    end_minute: Int
}

extend type Query {
    getUser: [user]
}

extend type Mutation {
    addUser(user: userInput): user
    updateUser(userID: ID!, user: userInput): user
    deleteUser(userID: ID!): user
}`
