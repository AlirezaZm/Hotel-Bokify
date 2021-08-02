import axios from 'axios'
import { setAlert } from './alert'
import AsyncStorage from '@react-native-async-storage/async-storage';
import setAuthToken from '../../utils/setAuthToken'

const SERVER = 'http://localhost:5000'

export const signUpAction = (username,email,password,rePassword) => async dispatch => {
    try{
        const data = JSON.stringify({ username, email, password, rePassword })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const res = await axios.post(SERVER + '/api/auth/signUp', data, config)
        dispatch({
            type:'REGISTER_SUCCESS',
            payload : res.data
        })
    }
    catch(err){
        const errors = err.response.data.error;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
    }
}

export const signInAction = (username , password) => async dispatch => {
    try {
        const data = JSON.stringify({ username, password })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const res = await axios.post(SERVER + '/api/auth/signIn', data, config)
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: res.data
        })
    }
    catch (err) {
        const errors = err.response.data.error;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
    }
}


export const loginFromStorage = () => async dispatch => {
    const token = await AsyncStorage.getItem('token')
    if (token){
        setAuthToken(token)
        dispatch({
            type : 'LOGIN_STORAGE_SUCCESS',
            payload : token
        })
    }
    else{
        setAuthToken()
    }
}
