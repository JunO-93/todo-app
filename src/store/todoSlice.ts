import type {Todo} from "../types/todo.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface TodoState {
    todos: Todo[]
}

const initialState: TodoState = {
    todos: [],
}

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.todos.push({
                id: Date.now(),
                text: action.payload,
                compelted: false,
            })
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            const todo = state.todos.find((t) => t.id === action.payload)
            if (todo) todo.compelted = !todo.compelted
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
          state.todos = state.todos.filter((t) => t.id !== action.payload)
        },
    },
})

export const{ addTodo, toggleTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer