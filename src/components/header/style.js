import {StyleSheet,StatusBar,Dimensions} from 'react-native'

const { width, height } = Dimensions.get('window')
const statusBarHeight = StatusBar.currentHeight
const headerHeight = height * 0.23 + statusBarHeight
const styles = StyleSheet.create({
    linearGradient:{
        height: headerHeight,
        width : '100%'
    }
})

export { width, height, headerHeight}

export default styles