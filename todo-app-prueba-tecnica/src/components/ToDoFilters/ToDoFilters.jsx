import { useContext } from "react"
import { FilterButton, FilterButtonContainer, FiltersContainer, ItemsLeft } from "./ToDoFilters.components"
import { ToDoContext } from "../Context/ToDoContext"

export const ToDoFilters = ({total}) => {

   const { 
      activeFilter,
       showActiveToDos,
       showAllToDos,
       showCompletedToDos,
       handleClearComplete} = useContext(ToDoContext)
  return (
    <FiltersContainer >
        <ItemsLeft total={total}/>
        <FilterButtonContainer>
          <FilterButton action={()=>showAllToDos()} active={activeFilter} filter={"All"}/>
          <FilterButton action={()=>showActiveToDos()} active={activeFilter} filter={"Active"}/>
          <FilterButton action={()=>showCompletedToDos()} active={activeFilter} filter={"Completed"}/>
        </FilterButtonContainer>
        <button onClick={()=>handleClearComplete()} className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in">
        Clear completed
        </button>
    </FiltersContainer>
  )
}
