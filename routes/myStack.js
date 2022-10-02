import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import About from '../screens/About';
import Task from '../screens/Task';
import Profile from '../screens/Profile';
import React from 'react';
import Stallion from '../screens/Stallions';
import Stallions from '../screens/StallionList';
import Login from '../screens/Login';

const Stack = createStackNavigator();
const LoginStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}
const AboutStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    )
}

const StallionStack = () => {
    return (
        <Stack.Navigator>
                <Stack.Screen name="StallionNames"
                component={Stallions}
            />
            <Stack.Screen name="Available"
                component={Stallion}
                options={({ route }) => { title: route.params.stallions }}
            />
        </Stack.Navigator>
    )
}

const ProfileStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="HorseName" component={Profile} />
            </Stack.Navigator>
        )
}

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: 'black',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}
        >
            <Stack.Screen name="Home2"
                component={Home}
            />
            <Stack.Screen name="Task"
                component={Task}
                options={({ route }) => { title: route.params.task }}
            />
        </Stack.Navigator>
    )
}

export { HomeStack, AboutStack, ProfileStack, StallionStack, LoginStack };