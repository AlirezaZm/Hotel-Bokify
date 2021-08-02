import React from 'react' 
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

import StarRender from './starRender'
import styles from './style'
import {colors} from '../../constants/colors'
import {useNavigation} from '@react-navigation/native'

const hotelListRender = ({data}) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.hotelListContainer} activeOpacity={1} onPress={() => navigation.navigate('detail screen' , {id:data.hotel_id}) }>
            <Image source={data.image} style={styles.image} />
            <View style={styles.rightContainer}>
                <View style={styles.rightContainer1}>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 18 , color:colors['color#3'] }}>{data.name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name='location-pin' size={20} color={colors['color#3']} />
                        <Text numberOfLines={2} style={{ fontFamily: 'Poppins-Regular', fontWeight: 'bold', fontSize: 15, color: colors['color#3']}}>{data.address}</Text>
                    </View>
                </View>
                <View style={styles.rightContainer2}>

                    <View style={styles.rightContainer21}>
                        <StarRender rating={data.rating} width='100' />
                        <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, color: colors['color#3'] }}>{data.review} review</Text>
                    </View>

                    <View style={styles.rightContainer22}>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 14 , color:'blue' }}>${data.price}/night</Text>
                    </View>

                </View>
            </View>






            {/* <View style={styles.middleContainer1}>
                <Text style={{fontFamily:'Poppins-SemiBold', fontSize:18 }}>{data.name}</Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Icon name='location-pin' size={19}/>
                    <Text numberOfLines={2}>{data.address}</Text>
                </View>
            </View>
            <View style={styles.middleContainer2}>
                    <StarRender rating={data.rating} width='100' />
                    <Text>1344 review</Text>
            </View>
                
            <View style={styles.rightContainer}>
                <Text>$255/night</Text>
            </View> */}
        </TouchableOpacity>
    )
}

export default hotelListRender