import React from 'react'
import {Text , View , StyleSheet, Dimensions, StatusBar } from 'react-native'
import {colors} from '../../constants/colors'
import LinearGradient from 'react-native-linear-gradient';
import { signUpAction} from '../../redux/actions/auth'
import Alert from '../../components/alerts'
import AuthForm from '../../components/authFormComponent'

const {width,height} = Dimensions.get('window')



const signUp = () => {
    
    return (
        //  <View style={styles.mainContainer}></View>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}  colors={[colors['color#1'],colors['color#2']]} style={styles.linearGradient}>
            <Alert/>
            <AuthForm compType='signUp'  />
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    mainContainer : {
        backgroundColor : colors['color#2']
    },
     linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center',
        height: height + StatusBar.currentHeight,
        width: width,
    },
 
    formContainer:{
        backgroundColor:'rgba(255,255,255,0.6)',
        width:'80%',
        height : '85%',
        borderRadius:20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingTop:20,
        borderWidth: 2,
        borderColor: colors['color#2'],
    },
    textInput : {
        width: '70%',
        height: 60,
        borderBottomWidth:2,
        borderColor: 'white',
        marginBottom:20,
        fontSize: 20,
        fontFamily : 'Poppins-SemiBold',
        paddingLeft: 10,
        marginLeft:40
    },
    headerText: {
        color : colors['color#3'],
        fontSize : 30,
        fontFamily : 'Poppins-Bold',
        marginBottom: 30,
        marginLeft:20,
        marginTop:20
    },
    buttonContainer:{
        width: '70%',
        height:60,
        borderRadius:5,
        marginLeft:'15%',
        marginTop : 20,
        alignItems: 'center',
        justifyContent : 'center',
    },
    buttonText:{
        fontSize:24,
        color : colors['color#3'],
        fontFamily : 'Poppins-Light',
        fontWeight:'bold',
    }
})

export default signUp