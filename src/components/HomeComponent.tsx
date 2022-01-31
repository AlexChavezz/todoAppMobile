import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { rootStackParams } from '../navigation/StackNavigation';
import { ListItem } from './ListItem';

interface Props extends StackScreenProps<rootStackParams, 'Home'> { };

export type Todos = {
    title: string,
    description: string,
    id: string,
}

export const HomeComponent = ({ navigation }: Props) => {

    const [todos, setTodos] = useState<Todos[]>([]);

    return (
        <View style={styles.container}>
            <ScrollView style={{ backgroundColor: '#F8F9FB' }} >
                <View style={styles.tasksContainer}>
                    {
                        todos.map(todo => <ListItem {...todo} key={todo.id} setTodos={setTodos} todos={todos} />)
                    }
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.buttonAdd}
                    onPress={() => navigation.navigate('AddNewTodo', {
                        setTodos,
                        todos,
                    })}
                >
                    <Text style={styles.buttonAddText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        // backgroundColor: '#181818',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#ccc',
    },
    buttonAdd: {
        height: 50,
        width: 50,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        // marginVertical: -15,
    },
    buttonAddText: {
        color: 'white',
        fontSize: 30,
    },
    tasksContainer: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})