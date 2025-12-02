import { useState } from 'react'
import './App.css'
import type {Todo} from "./types/todo.ts";

function App() {
    const [toDos, setToDos] = useState<Todo[]>()
    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
                <h1 className="text-2xl font-bold text-center mb-6">Todo App</h1>
                {/* TodoInput 들어갈 자리 */}
                {/* TodoList 들어갈 자리 */}
            </div>
        </div>
    )
}

export default App
