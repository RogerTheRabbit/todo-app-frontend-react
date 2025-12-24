import { useEffect, useState } from "react";
import ToDo from "./ToDo";
import ToDoCreator from "./ToDoCreator";

function ToDoContainer() {
  const [todos, setTodos] = useState<any[]>([]);

  const fetchTodos = () => {
    fetch(`${import.meta.env.VITE_BASE_API_PATH}/todos`)
      .then((resp) => resp.json())
      .then((fetchedTodos) => {
        let newTodos: any[] = [];
        Object.keys(fetchedTodos)?.forEach((key) => {
          newTodos.push({ id: key, ...fetchedTodos[key] });
        });
        setTodos(newTodos);
      });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <div className="divide-y divide-slate-800">
        {todos.map((todo) => (
          <ToDo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            username={todo.username}
            fetchTodos={fetchTodos}
          />
        ))}
      </div>
      <ToDoCreator fetchTodos={fetchTodos} />
    </div>
  );
}

export default ToDoContainer;
