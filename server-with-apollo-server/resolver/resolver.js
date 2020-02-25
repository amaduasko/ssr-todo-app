const TodoCollection = require("../mongoDB/models/TodoModel");

// The root provides a resolver function for each API endpoint
const resolvers = {
  //Query

  Query: {
    todos: () => TodoCollection.find(),
    todo: (parent, args) => TodoCollection.findById(args.id)
  },
  //Mutation
  Mutation: {
    addTodo: (parent, args) => TodoCollection.create(args)
  }
};

module.exports = resolvers;
