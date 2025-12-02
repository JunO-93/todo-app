import { useState } from 'react'
import './App.css'
import TodoInput from "./components/TodoInput.tsx";
import TodoList from "./components/TodoList.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "./store";
import {addTodo, deleteTodo, toggleTodo} from "./store/todoSlice.ts";

function App() {
    const todos = useSelector((state: RootState) => state.todo.todos)
    const dispatch = useDispatch()

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
                <h1 className="text-2xl font-bold text-center mb-6">Todo App</h1>
                <TodoInput onAdd={(text) => dispatch(addTodo(text))}/>
                <pre>{JSON.stringify(todos, null, 2)}</pre>
                <TodoList
                    todos={todos}
                    onToggle={(id) => dispatch(toggleTodo(id))}
                    onDelete={(id) => dispatch(deleteTodo(id))}/>
            </div>
        </div>
    )
}

export default App
