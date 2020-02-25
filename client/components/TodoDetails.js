import { getTodoQuery } from "../queries/queries";
import { Query } from "@apollo/react-components";

const TodoDetails = ({ todoId }) => {
  return (
    <div className="todo-details-container">
      <h2>Todo Details: </h2>
      <Query query={getTodoQuery} variables={{ id: todoId }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          if (data.todo)
            return (
              <div className="todo-details">
                <p>
                  <strong>Title :</strong> {data.todo.title}
                </p>
                <p>
                  <strong>Description</strong> : {data.todo.description}
                </p>
                <p>
                  <strong>Completed: </strong>
                  {data.todo.completed ? <span>Yes</span> : <span>No</span>}
                </p>
              </div>
            );
          else return <h4> Select a Todo to see the details </h4>;
        }}
      </Query>
      <style jsx>{`
        .todo-details-container {
          width: 40%;
          padding: 1rem;
          background-color: antiquewhite;
          border-radius: 10px;
        }
        .todo-details {
          border: 1px solid #0070f3;
          padding: 1rem;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default TodoDetails;
