import { createContext } from "react";
import { AuthAction } from "../../reducer/todoReducer";

export interface state {
    title: string, 
    description: string,
    id: string,
}


interface todoState {
    todos: state[] | [],
    // setTodos:  React.Dispatch<React.SetStateAction<state[] | []>>
    addNewTodo: (payload: state) => void,
    updateTodo: (payload:state)=> void,
    deleteTodo: (id:string) => void
}

export const TodoState = createContext({} as todoState);