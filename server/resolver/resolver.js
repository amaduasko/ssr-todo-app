const TodoCollection = require("../mongoDB/models/TodoModel");

// The root provides a resolver function for each API endpoint
const root = {
  //Query

  todos: () => TodoCollection.find(),
  todo: args => TodoCollection.findById(args.id),

  //Mutation

  addTodo: args => TodoCollection.create(args)
};

module.exports = root;
