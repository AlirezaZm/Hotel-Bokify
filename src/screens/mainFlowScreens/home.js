import React from 'react'
import { Text, View, StyleSheet, StatusBar, TouchableOpacity,Dimensions} from 'react-native'
import {FlatList, TextInput} from 'react-native-gesture-handler'
import Header from '../../components/header'
import Icon from 'react-native-vector-icons/FontAwesome'
import {colors} from '../../constants/colors'
import {HOTEL} from '../../data/data'
import HotelListRender from '../../components/hotelsListRederComponent'
const statusBarHeight = StatusBar.currentHeight

const home = () => {
    const [typeSelectorToggle , setTypeSelectorToggle] = React.useState(false)

    const onPressTypeSelectorToggle = (value) => {
        setTypeSelectorToggle(value)
    }
    return (
        <View style={{flex:1}}>
            <Header>
                <View style={styles.container}>
                    <Text style={styles.text}>Hotel Search</Text>
                    <TextInput placeholder = 'Hotel Search' style = {styles.textInput} >
                        <Icon name='search' style={styles.icon}  />
                        <Text style={styles.placeholder}>Hotel Search</Text>
                    </TextInput>
                </View>
            </Header>
            {/* content start */}
            <View style={{width: '100%'}}>
                <View style={{flexDirection: 'row',justifyContent:'space-between',width:'90%',marginHorizontal:'5%',marginTop:10}}>
                    <TouchableOpacity activeOpacity={1} onPress={() => onPressTypeSelectorToggle(false)}>
                        <Text style={[styles.typeSelectorText, { borderBottomWidth: !typeSelectorToggle ? 5 : 0 }]}>Recommended</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => onPressTypeSelectorToggle(true)}>
                        <Text style={[styles.typeSelectorText, { borderBottomWidth: typeSelectorToggle ? 5  :0 }]}>View all</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.hotelMainContainer}>
                    <FlatList
                    data = {HOTEL}
                    showsVerticalScrollIndicator = {false}
                    keyExtractor = {(item) => item.hotel_id}
                    style={{width:'100%' }}
                    renderItem = {({item}) => {
                        return (
                                <HotelListRender data={item} />
                        )
                    }}
                    />
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container : {
        width:'100%',
        height: 100,
        marginTop: statusBarHeight + 50,
        alignItems:'center',
    },
    text: {
        color:'white',
        fontFamily : 'Poppins-SemiBold',
        fontSize: 24,
        marginBottom:10
    }, 
    textInput:{
        backgroundColor: 'white',
        borderColor: colors['color#1'],
        borderWidth: 0.8,
        paddingLeft:20,
        borderRadius:25,
        width: '90%',
        height : 50,
        elevation:8
        
    }, 
    placeholder:{
        fontSize: 16, 
        fontFamily: 'Poppins-Light', 
        fontWeight: 'bold',
        color: colors['color#4'],
    },
    icon: {
        color:'yellow',
        alignSelf : 'center',
        color: colors['color#4'],
        fontSize : 22,
    },
    typeSelectorText : {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 15,
        borderBottomColor: colors['color#2'],
    },
    hotelMainContainer: {
        width : '94%',
        marginHorizontal : '3.5%',
        justifyContent : 'flex-start',
        alignItems : 'center',
        height:'76%',
        marginTop : 20,
     
    }
})

export default home