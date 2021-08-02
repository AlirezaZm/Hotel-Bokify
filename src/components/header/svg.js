import React from 'react'
import Svg, { Polygon, Defs, LinearGradient, Stop } from 'react-native-svg'


const svg = ({point1,point2}) => {
    return (
        <Svg style={{ position: 'absolute', right: 0 }}>
            <Defs>
                <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <Stop offset="0" stopColor="white" stopOpacity="0.5" />
                    <Stop offset="1" stopColor="white" stopOpacity="0" />
                </LinearGradient>
            </Defs>
            <Polygon
                points={point1}
                fill="url(#grad)"
            />
            <Polygon
                points={point2}
                fill="url(#grad)"
            />
        </Svg>
    )
}

export default svg