import { gql } from 'apollo-server-express';

export default gql`
type Address {
    _id:ID,
    type: String,
    address_type: String,
    map: String,
    address1: Int,
    address2: String,
    pin: String,
    phone_country: String,
    phone_no: String,
    site_id: ID,
    status: Boolean
}

input AddressInput {
    type: String,
    address_type: String,
    map: String,
    address1: Int,
    address2: String,
    pin: String,
    phone_country: String,
    phone_no: String,
    site_id: ID,
    status: Boolean
}

extend type Query {
    getAddress: [Address],    
}
extend type Mutation {
    addAddress(address: AddressInput):Address
    updateAddress(addressID: ID!, address: AddressInput):Address
    deleteAddress(addressID: ID!):Address
}
`