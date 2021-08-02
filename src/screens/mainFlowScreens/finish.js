import React from 'react'

import {Text,View,Dimensions,StatusBar, StyleSheet} from 'react-native'
import Header from '../../components/header'
import {colors} from '../../constants/colors'
import Icon from 'react-native-vector-icons/AntDesign'

const {width,height} = Dimensions.get('screen')

const finishComponent = ({route,navigation}) => {
    console.log(route)
    const hotel_price = route.params.price
    const duration = route.params.duration
    const total_price = hotel_price * duration
    const hotelName = route.params.name
    return (
        <>
            <Header>
                <Icon name='arrowleft' color='white' size={30}
                    style={{ marginTop: StatusBar.currentHeight + 10, marginLeft: 20 }}
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.headerTitle}>Confirmation</Text>
            </Header>
            <View style={styles.mainContainer}>
                <View style={{width:'90%',marginLeft:'5%',marginTop:30,alignItems:'center'}}>
                    <Text style={styles.textGeneralStyle}>{hotelName} </Text>
                    <Text style={[styles.textGeneralStyle , {color:colors['color#2']}]}>Approved</Text>
                    <Text style={[styles.textGeneralStyle , {color: colors['color#4']}]}>${total_price}</Text>
                    <Text style={[styles.textGeneralStyle, { color: colors['color#4'] }]}>for {duration} {duration > 1 ? 'days' :'day'}</Text>

                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    headerTitle : {
        marginLeft : '30%',
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
        color : 'white'
    },
    mainContainer: {
        position:'absolute',
        top : StatusBar.currentHeight + 0.15 * height,
        marginLeft : '5%',
        width : '90%',
        height : .3 * height,
        backgroundColor:'white',
        elevation:40
    },
    textGeneralStyle : {
        fontSize : 24,
        color : colors['color#3'],
        fontFamily : 'Poppins-Bold'

    }
})
export default finishComponent