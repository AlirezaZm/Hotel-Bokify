import React from 'react'
import {View,Text} from 'react-native'
import CalendarPicker from 'react-native-calendar-picker';
import styles from './style';
import {colors} from '../../constants/colors'
import Icon from 'react-native-vector-icons/Entypo'


const calenderComponent = ({ setStartDate, setEndDate}) => {
    
    const onDateChange = (date,type) => {
        if (type === 'END_DATE'){
            setEndDate(date)
        }
        else if(type === 'START_DATE'){
            setStartDate(date)
            setEndDate(null)
        }
    }
    return (
        <View style={styles.calenderContainer}>
            <CalendarPicker
                headerWrapperStyle={{ backgroundColor: 'white',width:'100%',borderRadius:15 }}
                textStyle = {{fontFamily:'Poppins-Regular',fontWeight:'bold',color:colors['color#4']}}
                dayLabelsWrapper = {{paddingVertical:20}}
                selectedDayStyle = {{backgroundColor : colors['color#2']}}
                selectedDayColor = 'white'
                todayTextStyle = {{color:'white' , fontSize:18}}
                restrictMonthNavigation = {true}
                allowRangeSelection={true}
                minDate = { Date.now()}
                selectedDayColor= {colors['color#1']}
                selectedDayTextColor="#fff"
                scaleFactor={375}
                onDateChange = {onDateChange}
                nextComponent={<Icon name='arrow-long-right' size={24} color={colors['color#1']}/>}
                previousComponent={<Icon name='arrow-long-left' size={24} color={colors['color#1']} />}
            />
        </View>
    )
}

export default calenderComponent