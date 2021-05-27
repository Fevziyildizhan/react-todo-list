import { useContext} from "react";
import { TodoListContext } from '../contexts/TodoListContext'

function Todo ({todo}){
  
const {deleteTodo} = useContext(TodoListContext)



return(
  <>
    <p>
    {todo.title}
    <button onClick = {()=>deleteTodo(todo.id)}>Delete</button>
    </p>

  </>
)

}

export default Todo;