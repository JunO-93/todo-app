import type {Todo} from "../types/todo.ts";

interface Props {
    todo:Todo
    onToggle: (id:number) => void
    onDelete: (id:number) => void
}

function TodoItem({todo, onToggle, onDelete}:Props) {
    return (
        <div className="flex item-centern gap-3 p-3 border-b">
            <input
                type="checkbox"
                checked={todo.compelted}
                onChange={() => onToggle(todo.id)}
                className="w-5 h-5 cursor-pointer"
            />
            <span
                className={ `flex-1 ${todo.compelted ? 'line-through text-gray-400': ''}`}
            >
                {todo.text}
            </span>
            <button
                onClick={() => onDelete(todo.id)}
                className="px-2 py-1 text-red-500 hover:bg-red-50 rounded"
            >
                삭제
            </button>
        </div>
    )
}

export default TodoItem