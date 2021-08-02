import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import { colors } from '../../constants/colors'


const gradientButton = ({ buttonLabel, children, onPressButton}) => {
    return (
        <TouchableOpacity onPress={onPressButton} activeOpacity={1}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[colors['color#1'], colors['color#2']]} style={styles.buttonContainer}>
                <View style={{flexDirection:'row' , alignItems:'center'}}>
                    <Text style={{ fontFamily: 'Poppins-Bold', color: 'white', fontSize: 21 }}>{buttonLabel}</Text>
                    {children}
                </View>
                
            </LinearGradient>
        </TouchableOpacity>
    )
    
}
const styles = StyleSheet.create({
    buttonContainer: {
        width: 200,
        height: 50,
        borderRadius: 25,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default gradientButton