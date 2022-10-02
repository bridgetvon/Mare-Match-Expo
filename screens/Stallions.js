import React from 'react'
import { View, Text, Button } from 'react-native'
import { global } from '../styles/global';

const Stallion = ({ navigation, route }) => {
    const popHandler = () => {
        // navigation to go back
        navigation.pop()
    }

    const pushHandler = () => {
        navigation.push("Stallions")
    }
    return (
        <View style={global.container}>
            <Text>Review Stallions</Text>
            <Text>{route.params.stallions}</Text>
            <Text>{route.params.registry}</Text>
            <Text>{route.params.contact}</Text>
            <Text>{route.params.location}</Text>
            <Button title="go to home POP" onPress={popHandler} />
            <Text></Text>
            <Button title="go to home PUSH" onPress={pushHandler} />
        </View>
    )
}

export default Stallion;