import { useContext} from "react";
import AddTodo from './AddTodo'
import Todo from './Todo'
import { TodoListContext } from '../contexts/TodoListContext'

function TodoList() {

    const { todos } = useContext(TodoListContext)



    return (
        <div className="flex flex-col bg-gray-200 rounded shadow-lg">
            <AddTodo />
            <ul className="mt-4">
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <Todo todo={todo} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList