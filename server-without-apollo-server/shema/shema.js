const { buildSchema } = require("graphql");

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
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

module.exports = schema;
