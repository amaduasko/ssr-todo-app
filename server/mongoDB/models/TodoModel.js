const mongoose = require("../database");
const schema = {
  title: String,
  description: String,
  completed: Boolean
};

const collectionName = "todos";
const TodoSchema = mongoose.Schema(schema);
const TodoCollection = mongoose.model(collectionName, TodoSchema);
module.exports = TodoCollection;
