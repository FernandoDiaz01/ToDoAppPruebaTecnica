
import { ToDoProvider } from "./components/Context/ToDoPrivder"
import { Form } from "./components/FormTask/Form"
import { Title } from "./components/Title/Title"
/* import { ToDoInput } from "./components/ToDoInput/ToDoInput" */
import { ToDoList } from "./components/ToDoList"

function App() {


  return (
    <ToDoProvider>
  <div className="bg-gray-900 min-h-screen h-full font-inter text-gray-100 flex items-center justify-center py-20 px-5">
    <div className="container flex flex-col max-w-xl">
    <Title/>
    <Form/>
    <ToDoList/>
    </div>
  </div>
  </ToDoProvider>
  )
}

export default App
