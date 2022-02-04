import { state } from "../context/todoState/TodoState";

export type AuthAction =
    { type: 'add new todo', payload: state }
    |
    { type: "update todo", payload: state }
    |
    { type: "delete todo", payload: string }

export const todoReducer = (state: state[], action: AuthAction): state[] => {
    switch (action.type) {
        case "add new todo":
            return [...state, action.payload]
        case "delete todo":
            return state.filter(todo => todo.id !== action.payload)
        case "update todo":
            return state.map(todo => todo.id === action.payload.id ? action.payload : todo)
        default:
            return state;
    }
}