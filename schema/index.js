import { gql } from 'apollo-server-express';
import addressSchema from './address'
import businessSchema from './business'
import categorySchema from './category'
import passwordSchema from './password'
import roleSchema from './role'
import siteSchema from './site'
import userSchema from './user'

const baseSchema = gql`
scalar Date
type Query {
  _: String
}
type Mutation {
  _: String
}
type Subscription {
  _: String
}
`;
export default [baseSchema, addressSchema, businessSchema, categorySchema, passwordSchema, siteSchema, roleSchema, userSchema ]