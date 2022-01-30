import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { rootStackParams } from '../navigation/StackNavigation';

interface Props extends StackScreenProps<rootStackParams, 'AddNewTodo'> {};

interface FormValues {
    title: string,
    description: string
}

export const AddNewTodo = ({ navigation, route }: Props) => {
    const { setTodos, todos } = route.params;
    useEffect(() => {
        navigation.setOptions({
            title: ' Insert new task',
            headerStyle: {
            }
        })
    }, [])
    const [values, setValues] = useState<FormValues>({
        title: '',
        description: ''
    });
    const onChangeTitle = (text: string) => {
        setValues({ ...values, title: text })
    }
    const onChangeDesription = (text: string) => {
        setValues({ ...values, description: text })
    }
    const onSubmit = () => {
        setTodos([...todos, { 
            description: values.description,
            title: values.title,                 
            id: Math.random().toString(36).slice(2)
        }])
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.formGroup}>
                <Text
                    style={styles.label}
                >Title: </Text>
                <TextInput
                    style={[styles.textInput, { height: 35 }]}
                    onChangeText={(text) => onChangeTitle(text)}
                />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Description: </Text>
                <TextInput
                    style={[styles.textInput, { textAlignVertical: "top" }]}
                    multiline
                    numberOfLines={10}
                    placeholder='Type somehting'
                    onChangeText={(text) => onChangeDesription(text)}
                />
            </View>
            <View style={styles.formGroup}>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={onSubmit}
                >
                    <Text style={styles.addButtonText}>  add </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        // justifyContent:'center'
    },
    label: {
        color: 'black'
    },
    textInput: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#ccc',
        color:'black',
    },
    formGroup: {
        marginVertical: 20
    },
    addButton: {
        borderWidth: 1,
        padding: 5,
        borderRadius: 8,
        width: 100,
        alignSelf: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: 'black',
    }
})
