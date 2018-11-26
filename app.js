const typeDefs = require("./schemas/schema.js").typeDefs;
const resolvers = require("./src/resolvers.js").resolvers;
const pubsub = require("./src/resolvers.js").pubsub;
const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const app = express();

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks: true,
  mockEntireSchema: false,
  introspection: true,
  playground: true
});
server.applyMiddleware({ app });

var port = process.env.PORT || 4000;
// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
app.listen(port, () => {
  console.log(`🚀  Server ready, url: ${server.graphqlPath}`);
});
