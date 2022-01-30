import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomeComponent, Todos } from '../components/HomeComponent';
import { LogBox } from 'react-native';
import { AddNewTodo } from '../components/AddNewTodo';
import { TodoScreen } from '../screens/TodoScreen';
LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

export type rootStackParams = {
    Home: undefined,
    AddNewTodo: {setTodos: React.Dispatch<React.SetStateAction<Todos[]>>, todos: Todos[]},
    TodoScreen: { title: string, description: string}
}

const Stack = createStackNavigator<rootStackParams>();

export const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                elevation: 0,
            },
            cardStyle:{
                backgroundColor:'white',
            }
        }}>
            <Stack.Screen name="Home" component={HomeComponent} />
            <Stack.Screen name="AddNewTodo" component={AddNewTodo} />
            <Stack.Screen name="TodoScreen" component={TodoScreen} />
        </Stack.Navigator>
    )
}