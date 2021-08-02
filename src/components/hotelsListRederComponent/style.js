import {StyleSheet} from 'react-native'
import {colors} from '../../constants/colors'

const styles = StyleSheet.create({
    hotelListContainer: { 
        height: 130,
        flexDirection: 'row',
        justifyContent: 'space-evenly' ,
        marginBottom :20,
        borderBottomWidth:.5,
        borderColor : colors['color#3']
    },
    image : {
        height: '80%',
        width: '30%',
        borderRadius: 10,
        alignSelf : 'center'
    },
    rightContainer : {
        width: '68%',
        marginLeft: '2%',
        height:'90%',
        marginTop: '2%',
        flexDirection: 'column'
    },
    rightContainer1:{
        width:'95%',
        height: '50%',
    },
    rightContainer2:{
        width : '100%',
        height:'50%',
        alignItems : 'flex-end',
        justifyContent : 'space-between',
        flexDirection : 'row'
    },
    rightContainer21:{

    },
    rightContainer22:{

    }
})

export default styles