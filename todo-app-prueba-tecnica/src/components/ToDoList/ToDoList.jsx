import { useContext } from "react"
import { ToDo } from "../ToDo/ToDo"
import { ToDoFilters } from "../ToDoFilters/ToDoFilters"
import { ToDoContext } from "../Context/ToDoContext"

export const ToDoList = () => {

  const {
    filteredToDos,
    handleSetComplete,
    handleDelete,
    activeFilter,
     showActiveToDos,
     showAllToDos,
     showCompletedToDos,
     handleClearComplete} = useContext(ToDoContext)

  return (
    <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
     {filteredToDos && filteredToDos.length > 0 ? (
  filteredToDos.map(todo => (
    <ToDo key={todo.id} todo={todo} handleSetComplete={handleSetComplete} handleDelete={handleDelete}/>
  ))
) : (
  <p className="text-gray-400 p-4">No tasks available</p>
)}


        <ToDoFilters 
          activeFilter={activeFilter}
          total={filteredToDos.length}
          showActiveToDos={showActiveToDos}
          showAllToDos={showAllToDos}
          showCompletedToDos={showCompletedToDos}
          handleClearComplete={handleClearComplete}
        />
    </div>
  )
}
