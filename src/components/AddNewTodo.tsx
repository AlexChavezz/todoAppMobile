import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { TodoState } from '../context/todoState/TodoState';
import { rootStackParams } from '../navigation/StackNavigation';

interface Props extends StackScreenProps<rootStackParams, 'AddNewTodo'> { };

interface FormValues {
    title: string,
    description: string,
    id: string
}

const initialState = {
    title: '',
    description: '',
    id: ''
}

export const AddNewTodo = ({ navigation, route }: Props) => {
    const { title, description, id } = route.params;
    const [values, setValues] = useState<FormValues>({
        title: '',
        description: '',
        id: ''
    });
    // const { title, description } = values;
    useEffect(() => {
        
        if (title && description && id ) {
            setValues({title, description, id});
        } else {
            setValues(initialState);
        }
        navigation.setOptions({
            title:title && description && id? 'Update' : 'Insert' ,
            headerTitleAlign: 'center',
            headerStyle: {
            }
        })
    }, [])

    const { addNewTodo, updateTodo } = useContext( TodoState )

    const onChangeTitle = (text: string) => {
        setValues({ ...values, title: text, })
    }
    const onChangeDesription = (text: string) => {
        setValues({ ...values, description: text })
    }
    const onSubmit = () => {
        if(title && description && id) {
            // setTodos( todos.map( todo => todo.id === id? values  : todo))
            updateTodo({title, description, id})
        }else {
            // setTodos([...todos, { title:values.title, description: values.description, id:Math.random().toString(36).slice(2) }])
            addNewTodo( {...values, id: Math.random().toString(36).slice(2) } )
        }
        navigation.navigate("Home")
    }

    return (
        <View style={styles.container}>
            <View style={styles.formGroup}>
                {/* <Text
                    style={styles.label}
                >Title: </Text> */}
                <TextInput
                    style={[styles.textInput, { height: 35 }]}
                    onChangeText={(text) => onChangeTitle(text)}
                    placeholder=' Insert Title '
                    defaultValue={values.title}
                />
            </View>
            <View style={styles.formGroup}>
                {/* <Text style={styles.label}>Description: </Text> */}
                <TextInput
                    defaultValue={values.description}
                    style={[styles.textInput, { textAlignVertical: "top" }]}
                    multiline
                    numberOfLines={10}
                    placeholder='Insert Description'
                    onChangeText={(text) => onChangeDesription(text)}
                />
            </View>
            <View style={[styles.formGroup, {backgroundColor:'white', flex:1, justifyContent:'flex-end'}]}>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={onSubmit}
                >
                    <Text style={styles.addButtonText}>
                        {
                            title && description && id ? "UPDATE" : "ADD"
                        }
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    label: {
        color: 'black'
    },
    textInput: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#ccc',
        color: 'black',
        padding: 5
    },
    formGroup: {
        marginVertical: 10,
        padding:10
    },
    addButton: {
        padding: 10,
        borderRadius: 5,
        width: 100,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#C184FF',

    },
    addButtonText: {
        color: 'white',
    }
})
