import {GraphQLDateTime} from 'graphql-iso-date';
import addressResolver from './address'
import businessResolver from './business'
import categoryResolver from './category'
import passwordResolver from './password'
import roleResolver from './role'
import siteResolver from './site'
import userResolver from './user'

const customScalarResolver = {
    Date : GraphQLDateTime
};

export default [customScalarResolver,  addressResolver, businessResolver, categoryResolver, passwordResolver, siteResolver, roleResolver, userResolver]