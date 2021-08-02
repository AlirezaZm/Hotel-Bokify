import React from 'react'
import { Text, View, StyleSheet, StatusBar, Keyboard, Dimensions } from 'react-native'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import moment from 'moment'
import CalenderComponent from '../../components/calenderComponent'
import { Input } from 'react-native-elements';


import Header from '../../components/header'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'

import { colors } from '../../constants/colors'
import { HOTEL } from '../../data/data'
import GradientButton from '../../components/gradientButtonComponent'



const { Width, height } = Dimensions.get('screen')
const statusBarHeight = StatusBar.currentHeight
const timeDate = moment()



const book  = ({route,navigation}) => {
    const [startDate, setStartDate] = React.useState(null)
    const [endDate, setEndDate] = React.useState(null)
    const [showCalender , setShowCalender] = React.useState(true)
    const [error , setError] = React.useState(null)
    const [adultNumber,setAdultNumber] = React.useState('1')
    const [childrenNumber,setChildrenNumber] = React.useState('0')
    const hotel_id = route.params.id
    let selectedHotel = {}
    HOTEL.map(hotel => {
        if (hotel.hotel_id.toString() === hotel_id.toString()) {
            selectedHotel = hotel
        }
    })

    let duration = null
    if (startDate && endDate){
        var durationDate = moment.duration(startDate.diff(endDate));
        var days = durationDate.asDays();
       duration =  Math.abs(days)+1
    }
        
    function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }

    React.useEffect(() => {
        const keyboardShow = Keyboard.addListener('keyboardDidShow' , (value) => {
            setShowCalender(false)
        })
        const keyboardHide = Keyboard.addListener('keyboardDidHide' , (value) => {
            setShowCalender(true)
        })

        return () => {
            keyboardShow.remove()
            keyboardHide.remove()
        }
    })
    const onTextChange = (value,type) => {
        setError(null)
        console.log(value.length)
        if (!isNumber(value) && value.length !== 0){
            setError('The value only can be number')
        }
        else{
            if (type === 'adult'){
                setAdultNumber(value)
            }
            else if (type === 'children'){
                setChildrenNumber(value)
            }
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <Header>
                <Icon name='arrowleft' color='white' size={30}
                    style={{ marginTop: StatusBar.currentHeight + 10, marginLeft: 20 }}
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.headerTitle}>Hotel Booking</Text>
            </Header>
            {showCalender && <CalenderComponent setStartDate={setStartDate} setEndDate={setEndDate}/>}
            <View style={styles.bookingInfoContainer}>
                <Text style={styles.dateIndicatorTitle}>Date</Text>
                <View style={{flexDirection:'row' , justifyContent:'flex-start',alignItems:'center'}}>
                    <Text style={[styles.dateText , {marginRight:10}]}>{startDate && moment(startDate).format('YYYY/MM/DD')}</Text>
                    {endDate &&<Icon1 name='arrow-long-right' size={24} color={colors['color#1']} /> }
                    <Text style={[styles.dateText , {marginLeft:10}]}>{endDate && moment(endDate).format('YYYY/MM/DD')}</Text>
                    {duration && <Text style={[styles.dateText,{marginLeft:20}]}>{duration} {duration > 1 ? 'days' : 'day'} </Text>}
                </View>
                <View>
                    <View style={{flexDirection:'row' , alignItems:'center',justifyContent:'flex-start',height:50}}>
                        <Text style={[styles.dateIndicatorTitle]}>Guests</Text>
                        {error && <Text style={{color: 'red',fontFamily:'Poppins-Bold',marginLeft:20}}>{error}</Text>}
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                        <Text style={styles.dateText}>Adult(s):</Text>
                        <Input
                            value={adultNumber}
                            leftIcon={
                                <Icon2 name='human-male' size={30} style={{ marginBottom: 8 }} />
                            }
                            style={{ color: colors['color#3'], fontFamily: 'Poppins-SemiBold' }}
                            containerStyle={{ width: '25%' }}
                            inputContainerStyle={{ borderBottomColor: colors['color#1'], borderBottomWidth: 5 }}
                            onChangeText={(value) => onTextChange(value, 'adult')}

                        />
                        <Text style={styles.dateText}>Children(s):</Text>
                        <Input
                            value={childrenNumber}
                            leftIcon={
                                <Icon2 name='human-male-boy' size={30} style={{marginBottom:8}}/>
                            }
                            containerStyle={{ width: '25%'}}
                            inputContainerStyle = {{borderBottomColor: colors['color#1'],borderBottomWidth:5}}
                            style={{color:colors['color#3'] , fontFamily:'Poppins-SemiBold' }}
                            onChangeText = {(value) => onTextChange(value,'children')}
                        />
                    </View>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: colors['color#2'],marginBottom:10 }}></View>
                </View>
                <GradientButton buttonLabel='Next' onPressButton={() => navigation.navigate('finish screen',
                    { price: selectedHotel.price, name: selectedHotel.name, duration: duration})}>
                    <Icon1 name='arrow-long-right' size={24} color = 'white' style={{marginLeft:10}} />
                </GradientButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerTitle:{
        color:'white',
        fontSize:20,
        fontFamily : 'Poppins-Bold',
        alignSelf: 'center'
    },
    bookingInfoContainer: {
        bottom: .03 * height,
        width: '90%',
        marginLeft: '5%',
        backgroundColor:'white',
        padding : 10,
        borderRadius : 20,
        maxHeight : height * 0.34,
        position:'absolute',

    },
    dateIndicatorTitle:{
        fontSize:24,
        color : colors['color#3'],
        fontFamily : 'Poppins-SemiBold',
    },
    dateText  :{
        fontSize: 17,
        color: colors['color#4'],
        fontFamily: 'Poppins-SemiBold'
    },
 
})

export default book