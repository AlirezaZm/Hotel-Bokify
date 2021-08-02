import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {Text} from 'react-native'
const Stack = createStackNavigator();

import SignUp from '../screens/authenticationScreens/signUp'
import SignIn from '../screens/authenticationScreens/signIn'

const authenticationFlowStack = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='signUp' component={SignUp} />
            <Stack.Screen name='signIn' component={SignIn} />
        </Stack.Navigator>
    )
}

export default authenticationFlowStack

