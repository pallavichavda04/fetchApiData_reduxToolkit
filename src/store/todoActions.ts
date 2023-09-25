import { ThunkAction } from "redux-thunk";
import todoSlice from "./todSlice";
import { AnyAction } from "redux";
import { TodoModel } from "../models/redux-models";
import todoService from "../service/todoService";
import { RootState } from ".";

export const todoActions = todoSlice.actions   

export const fetchTodos = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {
        if (getState().todo.all_todos.length === 0) {
            const response: TodoModel[] = await todoService.getAllTodos();
            dispatch(todoActions.setTodos(response))
        }
    }
}

export const fetchParticularTodo = (todo_id: number): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {
        const response: TodoModel = await todoService.getParticularTodo(todo_id);
        dispatch(todoActions.setParticularTodo(response))
    }
}