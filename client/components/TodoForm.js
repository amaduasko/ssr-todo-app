import { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { addTodoMutation, getTodosQuery } from "../queries/queries";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [addTodo, { data }] = useMutation(addTodoMutation);
  const handleTitleChange = evt => setTitle(evt.target.value);
  const handleDescriptionChange = evt => setDescription(evt.target.value);
  const submitTodoValue = evt => {
    const inputArray = document.getElementsByTagName("input");
    evt.preventDefault();
    addTodo({
      variables: { title, description, completed: false },
      refetchQueries: [
        {
          query: getTodosQuery
        }
      ]
    });
    for (let item of inputArray) {
      item.value = "";
    }
  };
  return (
    <form onSubmit={submitTodoValue}>
      <h2>Add Todo:</h2>
      <label>
        <strong>Title:</strong>
        <input name="title" type="text" onChange={handleTitleChange} />
      </label>
      <label>
        <strong>Description:</strong>
        <input
          name="description"
          type="text"
          onChange={handleDescriptionChange}
        />
      </label>
      <button type="submit">ADD</button>
      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 55%;
          margin-top: 20px;
          background-color: #757575;
          border-radius: 10px;
          padding: 1rem;
        }
        h2 {
          text-align: center;
        }
        label {
          display: flex;
          width: 60%;
          margin: 10px auto;
          height: 30px;
        }
        strong {
          width: inherit;
        }
        input {
          border: none;
          border-radius: 5px;
          background-color: #bdbdbd;
          padding-left: 10px;
          padding-right: 10px;
        }
        input:focus {
          outline: none;
        }
        button {
          border: none;
          width: 35%;
          padding: 1rem;
          border-radius: 5px;
          margin: 10px auto;
          background-color: #424242;
          font-weight: bold;
          color: #eee;
        }
        button:hover {
          cursor: pointer;
          background-color: #212121;
        }
      `}</style>
    </form>
  );
};

export default TodoForm;
