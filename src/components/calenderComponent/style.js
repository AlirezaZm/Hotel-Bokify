import {StyleSheet,StatusBar,Dimensions} from 'react-native'
import {colors} from '../../constants/colors'

const {Width,height} = Dimensions.get('screen')


const styles = StyleSheet.create({
    calenderContainer :{
        position:'absolute',
        top : StatusBar.currentHeight + 0.10 * height,
        backgroundColor:'white',
        width:'90%',
        marginLeft:'5%',
        borderRadius:15,
        height : 0.42 * height,
        elevation:15,
        borderColor: colors['color#2'],
        borderWidth: 0.8
    }
})



export default styles