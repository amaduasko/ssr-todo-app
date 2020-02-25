import { useState } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import fetch from "isomorphic-unfetch";
import TodoComponent from "./TodoComponent";
import TodoDetails from "./TodoDetails";
import TodoForm from "./TodoForm";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  fetch
});

const App = () => {
  const [todoId, setTodoId] = useState(null);
  return (
    <ApolloProvider client={client}>
      <div className="app-container">
        <TodoComponent setTodoId={setTodoId} />
        <TodoDetails todoId={todoId} />
        <style jsx>{`
          .app-container {
            display: flex;
          }
        `}</style>
      </div>
      <TodoForm />
    </ApolloProvider>
  );
};

export default App;
