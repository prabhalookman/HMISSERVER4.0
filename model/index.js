const mongoose = require('mongoose');
import Address from './address';
import Business from './business';
import Category from './category';
import Password from './password';
import Role from './role';
import Site from './site';
import User from './user';

const connectMongo = () => {
  return mongoose.connect(process.env.MONGO_URL, {useNewUrlParser : true, useFindAndModify: false, useUnifiedTopology: true})
}

const models = {  
  Address,
  Business,
  Category,
  Password,
  Role,
  Site,
  User
}

export {connectMongo};  
export default models;