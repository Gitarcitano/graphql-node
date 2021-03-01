import mongoose from 'mongoose';
import { ApolloServer, gql } from 'apollo-server';
import 'dotenv/config';

import * as User from './src/modules/User';

const { ATLAS_URL } = process.env;

mongoose.connect(ATLAS_URL, {
  useNewUrlParser: true
})

const typeDef = gql`
  type Query
  type Mutation
`;

const server = new ApolloServer({
  typeDefs: [typeDef, User.typeDef],
  resolvers: [User.resolvers],
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
