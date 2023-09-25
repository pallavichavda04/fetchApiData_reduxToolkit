import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TodoArrayModel, TodoModel } from "../models/redux-models";

const initialTodoState: TodoArrayModel = {
    all_todos: [],
    particaular_todo: {
        "userId": 0,
        "id": 0,
        "title": "",
        "completed": false
    }
}

const todoSlice = createSlice({
    name: "todo",
    initialState: initialTodoState,
    reducers: {
        setTodos(state, action: PayloadAction<TodoModel[]>) {
            state.all_todos = action.payload;
        },
        setParticularTodo(state, action: PayloadAction<TodoModel>) {
            state.particaular_todo = action.payload;
        }
    }
})

export default todoSlice;