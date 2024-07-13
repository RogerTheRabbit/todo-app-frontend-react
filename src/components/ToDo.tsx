import PropTypes from "prop-types";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function ToDo(props: any) {
  const deleteToDo = (id: number) => {
    fetch(`${import.meta.env.VITE_BASE_API_PATH}/todos/${id}`, {
      method: "DELETE",
    }).then(() => props.fetchTodos());
  };

  const [titleIsTextBox, setTitleIsTextBox] = useState(true);

  const onTitleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTitleIsTextBox(true);
    if (props.title === e.currentTarget.value) {
      return;
    }
    fetch(`${import.meta.env.VITE_BASE_API_PATH}/todos`, {
      method: "PUT",
      body: JSON.stringify({
        id: props.id,
        title: e.currentTarget.value,
        description: props.description,
      }),
    }).then(() => props.fetchTodos());
  };

  return (
    <div className="flex justify-between space-x-2 py-2">
      <div className="flex flex-col w-full">
        {titleIsTextBox ? (
          <div
            className="text-lg h-7"
            onClick={() => {
              setTitleIsTextBox(false);
            }}
          >
            {props.title}
          </div>
        ) : (
          <input
            className="bg-slate-700 rounded p-1 h-7 grow"
            autoFocus
            onBlur={onTitleBlur}
            defaultValue={props.title}
          />
        )}
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
