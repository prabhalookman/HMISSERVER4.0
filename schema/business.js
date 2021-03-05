import { gql } from 'apollo-server-express';

export default gql`

type business {
    _id:ID,
    site_id: String,
    type: String,
    name: String,
    size: Int,
    availability_type: String,
    createdOn_utc: String,
    billingAddress: String,
    shipppingAddress: String,
    phone_country: String,
    phone_no: String,
    url: String,
    addresses: [String],
    category_ids: [String],
    timings: timings
}

input BusinessInput {
    site_id: String,
    type: String,
    name: String,
    size: Int,
    availability_type: String,
    createdOn_utc: String,
    billingAddress: String,
    shipppingAddress: String,
    phone_country: String,
    phone_no: String,
    url: String,
    addresses: [String],
    category_ids: [String],
    timings: TimingsInput

}
type timings {    
    timing: [timing]
}

input TimingsInput {    
    timing: [TimingInput]
}

type timing {
    work_day_id: String,
    work_day_name: String,
    index: String,
    name: String,
    start_time: String,
    end_time: String,
    is_day_off: Int,
    is_special_day: Int,
    special: Int,
    availability_type_id: String,
    location: String,
    data_source: String,
    breaktime: [ BreakTime ]
}

input TimingInput {
    work_day_id: String,
    work_day_name: String,
    index: String,
    name: String,
    start_time: String,
    end_time: String,
    is_day_off: Int,
    is_special_day: Int,
    special: Int,
    availability_type_id: String,
    location: String,
    data_source: String,
    breaktime: [ BreakTimeInput ]
}

type BreakTime {
    start_time: String,
    start_hour: String,
    start_minute: String,
    end_time: String,
    end_hour: String,
    end_minute: String
}

input BreakTimeInput {
    start_time: String,
    start_hour: String,
    start_minute: String,
    end_time: String,
    end_hour: String,
    end_minute: String
}

extend type Query {
    getBusiness: [business],
}

extend type Mutation {

    addBusiness(business:BusinessInput):business
    updateBusiness(businessID: ID!, business: BusinessInput):business
    deleteBusiness(businessID: ID!):business

    addTimings(businessID: String!, timings: [TimingInput]): business,
    updateTimings(businessID: String!, timings_id:String!, timings: TimingInput): business,
    deleteTimings(businessID: String!, timings_id:String! ): Boolean

    addBreakTime(businessID: String!, timings_id: String!, breakTime: [BreakTimeInput]): business,
    updateBreakTime(businessID: String!, timings_id:String!,breaktime_id: String!, breakTime: [BreakTimeInput]): business,
    deleteBreakTime(businessID: String!, timings_id:String!,breaktime_id: String! ): Boolean    
    
}

`