import type {Todo} from "../types/todo.ts";
import TodoItem from "./TodoItem.tsx";

interface Props{
    todos: Todo[]
    onToggle: (id:number) => void
    onDelete: (id:number) => void
}

function TodoList({todos, onToggle, onDelete}:Props) {
    if(todos.length === 0){
        return <p className="text-center text-gray-400 py-4">할 일이 없습니다.</p>
    }
    return (
        <div className="border rounded-lg">
            {todos.map((todo)=> (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}

export default TodoList