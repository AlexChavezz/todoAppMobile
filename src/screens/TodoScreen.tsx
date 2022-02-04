import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TodoState } from '../context/todoState/TodoState';
import { rootStackParams } from '../navigation/StackNavigation';

interface Props extends StackScreenProps<rootStackParams, 'TodoScreen'> { };

export const TodoScreen = ({ navigation, route }: Props) => {
    const { title, description, id } = route.params;

    useEffect(() => {
        navigation.setOptions({
            title,
            headerTitleAlign: 'center'
        })
    }, [])

    const { todos } = useContext( TodoState )

    const deleteTodo = () => {
        // new implementatition
        // setTodos( todos.filter( todo => todo.id !== id))
        navigation.navigate('Home')
    }

    const editTodo = () => {
        navigation.navigate('AddNewTodo', {
            title,
            description, 
            id
        })
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.todoInfo} activeOpacity={.7}>
                <Text style={styles.subTitle}>{title} </Text>
                <Text style={{ color: 'white' }}>{description}</Text>
            </TouchableOpacity>
            <View style={styles.actionsContainer}>
                <TouchableOpacity
                    onPress={editTodo}
                    style={[styles.actionButton, styles.editItem]}
                    activeOpacity={.6}
                >
                    <Image
                        // style={{ width:50, height:50}}
                        source={require('../assets/outline_edit_white_24dp.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={deleteTodo}
                    style={[styles.actionButton, styles.deleteItem]}
                    activeOpacity={.6}
                >
                    <Image
                        // style={{ width:50, height:50}}
                        source={require('../assets/outline_delete_white_24dp.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        // justifyContent:'center'
    },
    todoInfo: {
        backgroundColor: '#C184FF',
        padding: 20,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4
    },
    subTitle: {
        marginBottom: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    actionsContainer: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        height: 50,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    actionButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 80,
        borderRadius: 10
    },
    deleteItem: {
        backgroundColor: '#dc3545'
    },
    editItem: {
        backgroundColor: '#0dcaf0'
    }
})