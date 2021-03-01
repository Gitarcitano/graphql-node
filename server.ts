import { GraphQLServer } from 'graphql-yoga';
import path from 'path';
import mongoose from 'mongoose';
import 'dotenv/config';

import { Query, Mutation } from './src/resolvers';

const { ATLAS_URL } = process.env;

mongoose.connect(ATLAS_URL, {
  useNewUrlParser: true
})

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'src', 'schema.graphql'),
  resolvers: {
    Query,
    Mutation,
  }
});

server.start();
