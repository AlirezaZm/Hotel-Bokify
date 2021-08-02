import React from 'react'
import {StyleSheet,Dimensions,StatusBar} from 'react-native'

import {colors} from '../../constants/colors'
const {width,height} = Dimensions.get('screen')

const style = StyleSheet.create({
    mainContainer:{
        width : '80%',
        marginTop : 20,
        marginBottom : 10,
        marginTop: StatusBar.currentHeight + 5

    },
    msgContainer:{
        width: '100%',
        height:50,
        borderRadius:15,
        backgroundColor: 'rgba(255,255,255,0.6)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:20,
    },
    msgText:{
        fontFamily : 'Poppins-Regular',
        fontSize: 20,
        color : colors['color#3']
    }
})

export default style