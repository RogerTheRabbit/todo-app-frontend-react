import PropTypes from "prop-types";
import { TrashIcon } from "@heroicons/react/24/outline";

function ToDo(props: any) {
  const deleteToDo = (id: number) => {
    console.log("Deleting", id);
    fetch(`${import.meta.env.VITE_BASE_API_PATH}/todos/${id}`, {
      method: "DELETE",
    }).then(() => props.fetchTodos());
  };

  return (
    <div className="flex justify-between space-x-2 py-2">
      <div className="flex flex-col">
        <div className="text-lg">{props.title}</div>
        <div className="text-sm text-slate-500">{props.description}</div>
      </div>
      <button
        onClick={() => {
          deleteToDo(props.id);
        }}
      >
        <TrashIcon className="h-5 w-5 text-slate-500 hover:text-red-400" />
      </button>
    </div>
  );
}

ToDo.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  fetchTodos: PropTypes.func,
};

export default ToDo;
