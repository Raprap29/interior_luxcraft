import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import resolvers from './graphql/resolvers.js';
import typeDefs from './graphql/typeDefs.js';

dotenv.config()

const app = express()

app.use(express.json())

app.use(cors())

app.use(bodyParser.json({ limit: '10mb' })); // 10mb limit
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser())

const server = new ApolloServer({
    typeDefs,
    resolvers,
});
  

mongoose.connect(process.env.MONGO_URL)
  .then(async() => {
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });
    console.log(`🚀  Server ready at: ${url}`);
  })
  .catch((error) => {
    console.log(error)
  })


export default app;