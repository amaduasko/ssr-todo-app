import { gql } from "apollo-boost";

const getTodosQuery = gql`
  {
    todos {
      id
      title
      description
      completed
    }
  }
`;
const getTodoQuery = gql`
  query($id: ID) {
    todo(id: $id) {
      id
      description
      title
      completed
    }
  }
`;
const addTodoMutation = gql`
  mutation AddTodo(
    $title: String!
    $description: String!
    $completed: Boolean!
  ) {
    addTodo(title: $title, description: $description, completed: $completed) {
      title
      description
      completed
    }
  }
`;

export { getTodosQuery, getTodoQuery, addTodoMutation };
