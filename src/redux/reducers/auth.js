import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    token: null,
    isAuthenticated: null,
    loading: true,
    user: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'REGISTER_SUCCESS':
        case 'LOGIN_SUCCESS':
            AsyncStorage.setItem('token' , action.payload.token)
            return {
                ...state,
                token : action.payload.token,
                isAuthenticated : true,
                loading : false
            }
        case 'LOGIN_STORAGE_SUCCESS':
            return {
                ...state,
                token : action.payload,
                isAuthenticated : true,
                loading : false
            }
        default:
            return state
    }
}