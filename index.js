import 'dotenv/config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { existsSync, mkdirSync } from 'fs'
import path from 'path'
import schema from './schema/index';
import resolvers from './resolvers/index';
import models, { connectMongo } from './model/index';

const PORT = process.env.PORT;
const app = express();

existsSync(path.join(__dirname, "../images")) || mkdirSync(path.join(__dirname, "../images"));
const AWS = require('aws-sdk');// Our default route
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: async ({ req, connection, res }) => {
    if (connection) {
      return {
        models
      }
    }
    if (req) {
      return {
        models,
        me: req.me,
        secret: process.env.SECRET,
        res,
        req
      }
    }
    //return models
  }
})

app.get('/imags/:name', (req, res) => {
  if (!req.params.name) return;
  AWS.config.update({
    accessKeyId: 'AKIAV5Z4ORGWBW563LFK',
    secretAccessKey: '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',
    region: 'eu-west-2',
    Bucket: 'hmisfilesupload'
  });

  let s3 = new AWS.S3();

  async function getImage() {
    const data = s3.getObject(
      {
        Bucket: 'hmisfilesupload',
        Key: req.params.name
      }

    ).promise();
    return data;
  }

  getImage()
    .then((img) => {
      let image = "<img src='data:image/jpeg;base64," + encode(img.Body) + "'" + "/>";
      let startHTML = "<html><body></body>";
      let endHTML = "</body></html>";
      let html = startHTML + image + endHTML;
      res.send(img.Body)
    }).catch((e) => {
      res.send(e)
    })

  function encode(data) {
    let buf = Buffer.from(data);
    let base64 = buf.toString('base64');
    return base64
  }
})

server.applyMiddleware({ app });

app.all('*', (req, res, next) => {
  next(new AppError(`Can't Find URL${req.originalUrl} on the server`, 404));
})

connectMongo().then(() => {
  console.log("Connected To The MongoDB.")
  app.listen({ port: PORT }, () => {
    console.log(`Apollo Server on http://localhost:${process.env.PORT}${server.graphqlPath}`);
  })
}).catch(err => {
  console.log("DB Connection Server Error : ", err)
})
