import React from 'react'
import {StyleSheet,Dimensions} from 'react-native'
import {colors} from '../../constants/colors'
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: 'rgba(255,255,255,0.6)',
        width: '80%',
        height: '85%',
        borderRadius: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingTop: 20,
        borderWidth: 2,
        borderColor: colors['color#2'],
    },
    textInput: {
        width: '70%',
        height: 60,
        borderBottomWidth: 2,
        borderColor: 'white',
        marginBottom: 20,
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
        paddingLeft: 10,
        marginLeft: 40
    },
    headerText: {
        color: colors['color#3'],
        fontSize: 30,
        fontFamily: 'Poppins-Bold',
        marginBottom: 30,
        marginLeft: 20,
        marginTop: 20
    },
    buttonContainer: {
        width: '70%',
        height: 60,
        borderRadius: 5,
        marginLeft: '15%',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 24,
        color: colors['color#3'],
        fontFamily: 'Poppins-Light',
        fontWeight: 'bold',
    }
})

export default styles