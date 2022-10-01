import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { global } from '../styles/global';

const Task = ({ navigation, route }) => {
    const popHandler = () => {
        // navigation to go back
        navigation.pop()
    }

    const pushHandler = () => {
        navigation.push("Home")
    }
    return (
        <View style={global.container}>
            <Text>Review Details</Text>
            <Text>{route.params.id}</Text>
            <Text>{String(route.params.done)}</Text>
            <Text>{route.params.task}</Text>
            <Button title="go to home POP" onPress={popHandler} />
            <Text></Text>
            <Button title="go to home PUSH" onPress={pushHandler} />
        </View>
    )
}

export default Task;