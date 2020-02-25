import { Query } from "@apollo/react-components";
import { getTodosQuery } from "../queries/queries";

const TodoComponent = ({ setTodoId }) => {
  return (
    <div className="todo-container">
      <h1>Todos List:</h1>
      <Query query={getTodosQuery}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return (
            <ul className="grid">
              {data.todos.map(todo => (
                <li
                  className="card"
                  key={todo.id}
                  onClick={() => setTodoId(todo.id)}
                >
                  {todo.title}
                </li>
              ))}
            </ul>
          );
        }}
      </Query>
      <style jsx>{`
        .todo-container {
          width: 60%;
          padding: 1rem;
        }
        .grid {
          display: flex;
          align-items: center;
          padding: 0;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          list-style: none;
          margin: 1rem;
          flex-basis: 45%;
          padding: 1rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          cursor: pointer;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default TodoComponent;
