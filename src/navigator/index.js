import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {useSelector,useDispatch} from 'react-redux' 

import MainFlowStack from './mainFlowStack'
import AuthenticationFlowStack from './authenticationFlowStack'

import { loginFromStorage} from '../redux/actions/auth'


const mainNavigator = () => {
    const dispatch = useDispatch()
    dispatch(loginFromStorage() )
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    return (
        <NavigationContainer>
            {isAuthenticated 
                ? (<MainFlowStack />)
                : (<AuthenticationFlowStack />)
            }
            
            
        </NavigationContainer>
    );
}

export default mainNavigator