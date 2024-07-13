import { useState } from "react";
import PropTypes from "prop-types";

function ToDoCreator(props: any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createTodo = (title: string, description: string) => {
    console.log("Creating todo:", title, description);
    fetch(`${import.meta.env.VITE_BASE_API_PATH}/todos`, {
      method: "POST",
      body: JSON.stringify({ title: title, description: description }),
    }).then(() => {
      setTitle("");
      setDescription("");
      props.fetchTodos();
    });
  };

  return (
    <div className="flex flex-col gap-y-1">
      Title:
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="bg-slate-700 rounded p-1 grow"
      />
      Description
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="bg-slate-700 rounded p-1 grow"
      />
      <button
        className="bg-slate-700 rounded p-1 grow bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
        onClick={() => createTodo(title, description)}
      >
        add
      </button>
    </div>
  );
}

ToDoCreator.propTypes = {
  fetchTodos: PropTypes.func,
};

export default ToDoCreator;
