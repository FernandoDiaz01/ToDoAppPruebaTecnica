/* import { useContext, useState } from "react";
import { ToDoContext } from "../Context/ToDoContext";

export const ToDoInput = () => {
  const { addToDo } = useContext(ToDoContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTodo = (e) => {
    if (e.key.toLowerCase() === "enter") {
      if (title.trim() && description.trim()) {
        addToDo({ title, description });
        setTitle("");
        setDescription("");
      }
    }
  };

  return (
    <div className="mt-6 relative space-y-6">
      <div className="relative">
       
        <input
          type="text"
          className="focus:shadow-lg font-inter focus:shadow-blue-800 pl-12 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
          placeholder="Título de la tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>

      <div className="relative">
        
        <input
          type="text"
          className="focus:shadow-lg font-inter focus:shadow-blue-800 pl-12 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
          placeholder="Descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          onKeyDown={handleTodo}
        />
      </div>
    </div>
  );
};
 */