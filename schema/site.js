import { gql } from 'apollo-server-express';

export default gql`
type site {
    _id:ID,
    DefaultLanguageId: String,
    DisplayOrder: Int,
    DisplayName: String,
    status: Boolean
}

input SiteInput {    
    DefaultLanguageId: String,
    DisplayOrder: Int,
    DisplayName: String,
    status: Boolean
}

extend type Query {
    getSite: [site]
}

extend type Mutation {
    addSite(site: SiteInput): site
    updateSite(siteID: ID!, site: SiteInput): site
    deleteSite(siteID: ID!): site
}`