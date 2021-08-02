import React from 'react'
import {StatusBar} from 'react-native'
import LinearGradientComp from 'react-native-linear-gradient';
import { colors } from '../../constants/colors'
import Svg , {Polygon , Defs , LinearGradient , Stop} from 'react-native-svg'
import styles from './style'
import { width, height, headerHeight} from './style'

const header = ({children}) => {
    const point1 = `
        ${width},${StatusBar.currentHeight} 
        ${width},${headerHeight}
        ${width * .58},${headerHeight} `
    const point2 = `
        ${width},${StatusBar.currentHeight+40}
        ${width},${headerHeight},
        ${width * .70},${headerHeight}`
    return (
        <LinearGradientComp start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[colors['color#2'], colors['color#1']]} style={styles.linearGradient}>
            <Svg  style={{position:'absolute' , right:0}}>
                <Defs>
                    <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <Stop offset="0" stopColor="white" stopOpacity="0.5" />
                        <Stop offset="1" stopColor="white" stopOpacity="0" />
                    </LinearGradient>
                </Defs>
                <Polygon
                    points={ point1}
                    fill="url(#grad)"
                />
                <Polygon
                    points={point2}
                    fill="url(#grad)"
                />
            </Svg>
            {children}
        </LinearGradientComp>
    )
    
}
export default header
 
