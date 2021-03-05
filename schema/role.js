import { gql } from 'apollo-server-express';

export default gql`
type role {
    _id:ID,
    Name: String,
    DisplayOrder: Int,
    Created_onUtc: String,
    site_id: String,
    status: Boolean
}

input RoleInput {
    Name: String,
    DisplayOrder: Int,
    Created_onUtc: String,
    site_id: String,
    status: Boolean
}

extend type Query {
    getRole: [role]
}
extend type Mutation {
    addRole(role: RoleInput): role
    updateRole(roleID: ID!, role: RoleInput): role
    deleteRole(roleID: ID!): role
}
`