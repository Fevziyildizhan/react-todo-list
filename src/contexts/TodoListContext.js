import {useState} from 'react'
import { createContext } from "react";

export const TodoListContext = createContext()



const TodoListProvider = (props) =>{

    
    const [todos,setTodos] = useState([])

  
    const addTodo = (title) =>{
        let newTodos = {
            id : Math.floor(Math.random()*1000),
            title,
        }

        setTodos([...todos,newTodos])
    } 


   const deleteTodo = (id) =>{
       setTodos(todos.filter((todo)=>todo.id !== id))
   }

 
  /* const updateTodo = (id) =>{
       setTodos(todos.map((todo)=>todo.id === id ?{...todo, completed : ! todo.completed} : todo))
   }*/


   return(
       <TodoListContext.Provider value={{todos,addTodo,deleteTodo}}>
          {props.children} 
       </TodoListContext.Provider>
   )

}

export default TodoListProvider;