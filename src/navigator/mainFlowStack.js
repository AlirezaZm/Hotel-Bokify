import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native'

import HomeScreen from '../screens/mainFlowScreens/home'
import DetailScreen from '../screens/mainFlowScreens/detail'
import BookScreen from '../screens/mainFlowScreens/book'
import FinishScreen from '../screens/mainFlowScreens/finish'

const Stack = createStackNavigator();

const home = () => {
    return (
        <Text>mainFlowStack</Text>
    )
}

const mainFlowStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='home screen' component={HomeScreen} />
            <Stack.Screen name='detail screen' component={DetailScreen} />
            <Stack.Screen name='book screen' component={BookScreen} />
            <Stack.Screen name='finish screen' component={FinishScreen} />

        </Stack.Navigator>
    )
}

export default mainFlowStack

