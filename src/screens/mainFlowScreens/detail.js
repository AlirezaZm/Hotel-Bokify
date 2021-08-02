import React from 'react'

import {View,Text,ImageBackground, StatusBar,StyleSheet,Dimensions, ScrollView, Touchable, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import GradientButton from '../../components/gradientButtonComponent'


import {HOTEL} from '../../data/data'
import  {colors} from '../../constants/colors' 
import StarRender from '../../components/hotelsListRederComponent/starRender'

const {width,height} = Dimensions.get('window')

const detail = ({route,navigation}) => {
    let selectedHotel = {}
    const hotel_id = route.params.id
    HOTEL.map(hotel => {
        if (hotel.hotel_id.toString() === hotel_id.toString()){
            selectedHotel = hotel
        } 
    })
    return (
        <View style={{flex:1}}>
            <ImageBackground source={selectedHotel.image} style={{ width: '100%', height: StatusBar.currentHeight + (.3 * height), elevation: 50 }}>
                <Icon name='arrowleft' color='white' size={30}
                    style={{ marginTop: StatusBar.currentHeight + 20, marginLeft: 20 }}
                    onPress={() => navigation.goBack()}
                />
            </ImageBackground >
            <View style={styles.contentMainContainer}>
                <Text style={styles.hotelNameText}>{selectedHotel.name}</Text>
                
                <View style={{flexDirection:'row' , alignItems:'center'}}>
                    <Icon1 name='location-pin' size={20} color={colors['color#3']} />
                    <Text style={styles.hotelAddressText}>{selectedHotel.address}</Text>
                </View> 
                {/* Hotel detail */}
                <View style={{marginTop:10}}>
                    <Text style={styles.hotelDetailTitle}>Detail</Text>
                    <ScrollView style={{height:'25%'}} showsVerticalScrollIndicator={false}>
                        <Text style={styles.hotelDetailText}>{selectedHotel.detail}</Text>
                    </ScrollView>
                </View>

                {/* Hotel Ammenity */}
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.hotelDetailTitle}>Amenities</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{justifyContent:'space-between'}} >
                            {selectedHotel.amenities.map(amenity => {
                                return (
                                    <View key={amenity} style={{flexDirection:'row', marginRight:15,alignItems:'center',justifyContent:'flex-start',height:40}}>
                                        <Icon2 name='circle' style={{marginRight:5 , fontSize:15}} color={colors['color#1']} />
                                        <Text style={{fontFamily:'Poppins-SemiBold',color:colors['color#3'],fontSize:17 }}>{amenity}</Text>
                                    </View>
                                )
                            })}
                        </ScrollView>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:15,marginTop:10}}>
                    <View>
                        <Text style={{color:colors['color#3'],fontSize:20,fontFamily:'Poppins-Bold'}}>Price</Text>
                        <Text style={{ color: colors['color#4'], fontSize: 15, fontFamily: 'Poppins-Bold' }}>${selectedHotel.price}</Text>
                    </View>
                    <View>
                        <Text style={{ color: colors['color#3'], fontSize: 20, fontFamily: 'Poppins-Bold' }}>Reviews</Text>
                        <Text style={{ color: colors['color#4'], fontSize: 15, fontFamily: 'Poppins-Bold' }}>${selectedHotel.review}</Text>
                    </View>
                    <View>
                        <StarRender rating={selectedHotel.rating} width='100' />
                    </View>
                </View>
                <GradientButton buttonLabel='Book Now' onPressButton={() => navigation.navigate('book screen', { id: selectedHotel.hotel_id })}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    contentMainContainer:{
        height: .67*height,
        marginTop : 0.03 * height,
        width: '90%',
        marginLeft : '5%'
    },
    hotelNameText: {
        fontSize:24,
        fontFamily : 'Poppins-Bold',
        color : colors['color#3']
    },
    hotelAddressText: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        fontWeight: 'bold',
        color: colors['color#4']
    },
    hotelDetailTitle:{
        fontSize: 24,
        fontFamily: 'Poppins-Bold',
        color: colors['color#3']
    },
    hotelDetailText:{
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        fontWeight: 'bold',
        color: colors['color#4'],
    },
    buttonContainer:{
        width:200,
        height:50,
        borderRadius:25,
        alignSelf : 'center',
        alignItems:'center',
        justifyContent: 'center',
    }
})

export default detail