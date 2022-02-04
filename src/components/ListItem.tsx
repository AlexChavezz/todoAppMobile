import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { rootStackParams } from '../navigation/StackNavigation';
import { Todos } from './HomeComponent';

interface ListItemProps {
    title:string, 
    description: string,
    id: string,
}

// -> Optimizing this whit rootStackParams + ListItemProps

type authScreenProp = StackNavigationProp<rootStackParams, 'TodoScreen'>

export const ListItem = ({ title, description, id }:ListItemProps) => {
    const navigation = useNavigation<authScreenProp>();
    return (
        <TouchableOpacity style={ styles.itemContainer }
            onPress={ () => navigation.navigate('TodoScreen', {
                title, 
                description,
                id,
            })}
>
            <Text style={ styles.itemText}>{ title }</Text>
        </TouchableOpacity>
    )
};


const styles = StyleSheet.create({
    itemContainer:{
        width:100,
        height:100,
        backgroundColor:'#C184FF',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:10
    },
    itemText: {
        color: 'white'
    }
})
