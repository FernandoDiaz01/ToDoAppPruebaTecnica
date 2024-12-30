import { useEffect, useState } from "react";
import { ToDoContext } from "./ToDoContext";
import { getTasks,createTask,updateTask,deleteTask } from "../../services/taskService";

export const ToDoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
 // Estados de filtros
 const [activeFilter, setActiveFilter] = useState('all');
 const [filteredToDos, setFilteredToDos] = useState([...todos]);

//llamda y carga desde la api
 useEffect(()=>{
  const axiosTasks = async()=>{
    try {
      const data = await getTasks();
      setTodos(data)
      setFilteredToDos(data)
    } catch (error) {
      console.error('Error al cragar las tareas', error);
    }
  }
  axiosTasks();
 }
 ,[])  


 const addToDo = async ({ title, description }) => {
 try{
  const newTask = await createTask(title,description)
  setTodos([...todos,newTask])
 }catch(error){
  console.error('Erorr al crear una nueva tarea', error)
 }
};


   
const handleSetComplete = async (id) => {
  const task = todos.find((todo) => todo.id === id); 
  const updatedTask = { ...task, completed: !task.completed };

  try {

    const result = await updateTask(id, updatedTask); 
  
    setTodos(todos.map((todo) => (todo.id === id ? result : todo)));
  } catch (error) {
    console.error('Error al actualizar tarea:', error);
  }
};


    const handleDelete = async (id) => {
      try {
        await deleteTask(id);
        const updatedList = todos.filter((todo) => todo.id !== id);
        setTodos(updatedList);
      } catch (error) {
        console.error('Error al eliminar tarea:', error);
      }
    };
   

    const handleClearComplete = () => {
        const updatedList = todos.filter(todo => !todo.completed);
        setTodos(updatedList);
        setFilteredToDos(updatedList);
    };

    const showAllToDos = () => {
        setActiveFilter('all');
    };

    const showActiveToDos = () => {
        setActiveFilter('active');
    };

    const showCompletedToDos = () => {
        const completedToDos = todos.filter(todo => todo.completed === true);
        setFilteredToDos(completedToDos);
    };



    useEffect(() => {
      let filtered;
      if (activeFilter === 'all') {
        filtered = todos;
      } else if (activeFilter === 'active') {
        filtered = todos.filter((todo) => !todo.completed);
      } else if (activeFilter === 'completed') {
        filtered = todos.filter((todo) => todo.completed);
      }
      setFilteredToDos(filtered);
    }, [activeFilter, todos]);

    return (
      <ToDoContext.Provider value={{
        todos,
        filteredToDos,
        activeFilter,
        handleSetComplete,
        addToDo,
        handleDelete,
        showActiveToDos,
        showAllToDos,
        showCompletedToDos,
        handleClearComplete
      }}>
        {children}
      </ToDoContext.Provider>
    );
};
