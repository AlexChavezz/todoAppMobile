import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { rootStackParams } from '../navigation/StackNavigation';

interface Props extends StackScreenProps<rootStackParams, 'TodoScreen'> { };

export const TodoScreen = ({ route }: Props) => {
    const { title, description } = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.todoInfo}>
                <Text style={ styles.subTitle}>{ title } </Text>
                <Text style={{ color: 'black' }}>{description}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    todoInfo: {
        backgroundColor:'#CCCAD7',
        padding: 20,
        borderRadius:5,
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
        color:"#181818",
        marginBottom:20,
        fontWeight: 'bold'
    }
})