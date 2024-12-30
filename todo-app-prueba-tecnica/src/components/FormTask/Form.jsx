import { useState, useContext } from 'react';
import { ToDoContext } from '../Context/ToDoContext';

export const Form = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { addToDo } = useContext(ToDoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      addToDo({ title, description });
      setTitle('');
      setDescription('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key.toLowerCase() === "enter") {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col">
      <input
        type="text"
        placeholder="Nueva tarea"
        className="p-2 border rounded text-black"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <textarea
        placeholder="Descripción (opcional)"
        className="mt-2 p-2 border rounded text-black"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">
        Añadir
      </button>
    </form>
  );
};
