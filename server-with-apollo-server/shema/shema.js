const { gql } = require("apollo-server");

// Construct a schema, using GraphQL schema language
var typeDefs = gql(`
  type Query {
    todo (id: ID) : todo
    todos : [todo] 
  }
  type todo {
      id: ID
      description: String
      title: String
      completed: Boolean
  }
  type Mutation {
      addTodo(
          id: ID
          title: String!
          description: String!
          completed: Boolean!
      ): todo
  }
`);

module.exports = typeDefs;
