const { ApolloServer } = require("apollo-server");
const typeDefs = require("./shema/shema");
const resolvers = require("./resolver/resolver");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
