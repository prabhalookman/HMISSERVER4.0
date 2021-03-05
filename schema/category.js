import { gql } from 'apollo-server-express';

export default gql`
type category {
    _id:ID,
    category_name: String,
    parant_category_id: String,
    icon: String,
    icon_path: String,
    type: String,
    type_group: type_group,
    active: Boolean,
    deleted: Boolean,
    created_onUtc: String,
    modified_onUtc: String,
    status: Boolean
}

type type_group {
    site_id: String
}

input CategoryInput {
    category_name: String,
    parant_category_id: String,
    icon: String,
    icon_path: String,
    type: String,
    type_group: TypeGroupInput,
    active: Boolean,
    deleted: Boolean,
    created_onUtc: String,
    modified_onUtc: String,
    status: Boolean
}

input TypeGroupInput{
    site_id: String
}

extend type Query {
    getCategory: [category],    
}
extend type Mutation {
    addCategory(category: CategoryInput):category
    updateCategory(categoryID: ID!, category: CategoryInput):category
    deleteCategory(categoryID: ID!):category
}
`