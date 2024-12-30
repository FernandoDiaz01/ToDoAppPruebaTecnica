import { useContext } from "react";
import { ToDoContext } from "../Context/ToDoContext";

export const ToDo = ({ todo }) => {
  const { handleSetComplete, handleDelete } = useContext(ToDoContext);
  const { title, completed, id, description } = todo;

  const OnFinishTask = () => {
    handleSetComplete(id);
  };
  const OnDeleteTask = (id) => {
    console.log('Eliminar tarea con ID:', id);
    handleDelete(id);
  };

  return (
    <div className="flex flex-col p-4 bg-gray-700 border-b border-solid border-gray-600">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {completed ? (
            <div
              className="bg-green-700 p-1 rounded-full cursor-pointer"
              onClick={OnFinishTask}
            >
              <img src="/check-icon-solid.svg" alt="Check Icon" />
            </div>
          ) : (
            <div
              className="border-solid border border-gray-500 rounded-full p-3 cursor-pointer"
              onClick={OnFinishTask}
            ></div>
          )}
          <div className="pl-3">
            <p className={`text-lg ${completed ? "line-through" : ""}`}>
              {title}
            </p>
            {description && (
              <p className="text-sm text-gray-400 mt-1">{description}</p>
            )}
          </div>
        </div>
        <img
          onClick={() => OnDeleteTask(id)}
          className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in"
          src="./close-icon-solid.svg"
          alt="Close Icon"
        />
      </div>
    </div>
  );
};
