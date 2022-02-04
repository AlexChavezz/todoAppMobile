import 'react-native-gesture-handler';
import React, { useReducer, useState } from 'react';
import { InitialState, NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './src/navigation/StackNavigation';
import { state, TodoState } from './src/context/todoState/TodoState';
import { AuthAction, todoReducer } from './src/reducer/todoReducer';



export default () => {
  // const [ todos, setTodos ] = useState<state[] | []>([]);
  const [todos, dispatch] = useReducer(todoReducer, []);
  const addNewTodo = (payload:state) => {
    dispatch({ type: "add new todo", payload })
  }
  const deleteTodo = (id:string) => {
    dispatch({ type: "delete todo", payload:id})
  }
  const updateTodo = (payload: state) => {
    dispatch({type:"update todo", payload})
  }
  return (
    <NavigationContainer>
      <TodoState.Provider value={{
        todos,
        addNewTodo,
        updateTodo,
        deleteTodo
      }}>
        <StackNavigation />
      </TodoState.Provider>
    </NavigationContainer>
  )
}