import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import About from '../screens/About';
import Task from '../screens/Task';
import React from 'react';

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator
        screenOptions={{headerStyle: {
            backgroundColor: 'white'
        }, 
        headerTintColor: 'black',
        headerTitleStyle: {
            fontWeight: 'bold'
        }}}
        >
        <Stack.Screen name="Home" 
        component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Task" component={Task} />
        </Stack.Navigator>
    )
}

export default MyStack;