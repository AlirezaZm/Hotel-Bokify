import React from 'react'
import {Text ,TouchableOpacity,View} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux'

import { signUpAction,signInAction } from '../../redux/actions/auth'
import { colors } from '../../constants/colors'
import {useNavigation} from '@react-navigation/native'


import styles from './style'


const authFormComponent = ({ compType}) => {
    const navigation = useNavigation()
    const navigationText = compType === 'signUp'  
        ? 'Already have account? sign in to your account'
        : 'You dont have account? create it!'
    const onPressNavigation = () => {
        if (compType === 'signUp') {
            navigation.navigate('signIn')
        }
        if(compType === 'signIn'){
            navigation.navigate('signUp')
        }
    }
    const placeholderText = compType === 'signUp' ? 'username' : 'username or email'
    const dispatch = useDispatch()
    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [rePassword, setRePassword] = React.useState('')
    const label = compType === 'signUp' ? 'Sign Up' : 'Sign In'
    const OnvalueChange = (value, type) => {
        if (type === 'username') {
            setUsername(value)
        }
        if (type === 'email') {
            setEmail(value)
        }
        if (type === 'password') {
            setPassword(value)
        }
        if (type === 'rePassword') {
            setRePassword(value)
        }
    }
    const onSignUp = () => {
        if (compType === 'signUp'){
            dispatch(signUpAction(username, email, password, rePassword))
        }
        if(compType === 'signIn'){
            dispatch(signInAction(username, password))

        }
    }
    return (
        <View style={styles.formContainer}>
            <Text style={styles.headerText}>{label}</Text>
            <TextInput style={styles.textInput} placeholder={placeholderText} value={username} onChangeText={value => OnvalueChange(value, 'username')} />
            {compType === 'signUp' &&<TextInput style={styles.textInput} placeholder='email' value={email} onChangeText={value => OnvalueChange(value, 'email')} />}
            <TextInput style={styles.textInput} placeholder='passoword' value={password} onChangeText={value => OnvalueChange(value, 'password')} />
            {compType === 'signUp' && <TextInput style={styles.textInput} placeholder='Repeat Password' value={rePassword} onChangeText={value => OnvalueChange(value, 'rePassword')} />}
            <TouchableOpacity style={{ width: '100%' }} onPress={() => onSignUp()}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[colors['color#1'], colors['color#2']]} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>{label}</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressNavigation} style={{ width: '90%', marginLeft: '5%', marginTop: 20, alignItems: 'center' }}>
                <Text style={{
                    fontFamily: 'Poppins-Regular', fontSize: 16, color: colors['color#3']
                }}>{navigationText}</Text>
            </TouchableOpacity>
        </View>
    )
}


export default authFormComponent