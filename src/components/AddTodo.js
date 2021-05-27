import { useContext, useState } from "react";
import {TodoListContext} from '../contexts/TodoListContext'


function AddTodo() {

    const {addTodo} = useContext(TodoListContext)

    const [newTodo , setNewTodo] = useState({title : ""})


  const {title} = newTodo 

    const onInputChange = (e) =>{
        setNewTodo({...newTodo, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
       addTodo(title)
    }


    return (
        <div className="mx-4 mt-6">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="yazınız"
                    name = "title"
                    value={title}
                    onChange={e => onInputChange(e)}
                />
                <button
                    type="submit"
                    className="transition duration-200 ease-in-out text-gray-400 focus:outline-none hover:text-pink-500 text-lg px-2 cursor-pointer"
                    data-testid="task-submit-btn"> ADD TODO
                </button>
            </form>
        </div>
    )
}

export default AddTodo