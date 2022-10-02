import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStack, AboutStack, ProfileStack, StallionStack, LoginStack } from './myStack';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName='Login'>
            <Drawer.Screen name="Login" component={LoginStack} />
            <Drawer.Screen name="HomeDrawer" component={HomeStack} />
            <Drawer.Screen name="About" component={AboutStack} />
            <Drawer.Screen name="Profile" component={ProfileStack} />
            <Drawer.Screen name="Stallions" component={StallionStack} />
        </Drawer.Navigator>
    )
}

export default MyDrawer;