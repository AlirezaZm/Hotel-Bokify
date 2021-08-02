import React from 'react'
import {Text,View} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import {colors} from '../../constants/colors'

const starRender = ({rating,width}) => {
    const overallRating = (rating * width * 20) / 100
    return (
        <View width={100} >
            <View style={{flexDirection:'row'}}>
                <Icon name='star' size={20} color={colors['color#4']}/>
                <Icon name='star' size={20} color={colors['color#4']}/>
                <Icon name='star' size={20} color={colors['color#4']}/>
                <Icon name='star' size={20} color={colors['color#4']} />
                <Icon name='star' size={20} color = {colors['color#4']} />
            </View>
            <View style={{ flexDirection: 'row', overflow: 'hidden', width: overallRating,position:'absolute' }}>
                <Icon name='star' size={20} color='#ffd700' />
                <Icon name='star' size={20} color='#ffd700' />
                <Icon name='star' size={20} color='#ffd700' />
                <Icon name='star' size={20} color='#ffd700' />
                <Icon name='star' size={20} color='#ffd700' />
            </View>
          
        </View>
    )
}

export default starRender