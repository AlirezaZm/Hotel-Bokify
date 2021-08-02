import React, { useState } from 'react'

import {View,Text,ScrollView} from 'react-native'
import {useSelector} from 'react-redux'
import styles from './style'

const alertComponent = () => {
    const alerts = useSelector(state => state.alert)
    if (alerts.length ===0 ){
        return null
    }
    else{
        return (
            <ScrollView style={styles.mainContainer}>
                {alerts.map(alert => {
                    return (
                        <View style={styles.msgContainer} key={alert.id}>
                            <Text style={styles.msgText}>{alert.msg}</Text>
                        </View>
                    )
                 
                })}
            </ScrollView>
        )
    }
    
}

export default alertComponent