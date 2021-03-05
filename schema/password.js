import { gql } from 'apollo-server-express';

export default gql`
type password {
    _id: ID,
    user_id: String,
    password: String,
    password_format_id: Int,
    password_salt: String,
    createdOn_Utc: String,
    password_change_dateUtc: String,
    status: Boolean
}

input PasswordInput {
    user_id: String,
    password: String,
    password_format_id: Int,
    password_salt: String,
    createdOn_Utc: String,
    password_change_dateUtc: String,
    status: Boolean
}

extend type Query {
    getPassword: [password],    
}
extend type Mutation {
    addPassword(password: PasswordInput):password
    updatePassword(passwordID: ID!, password: PasswordInput):password
    deletePassword(passwordID: ID!):password
}
`