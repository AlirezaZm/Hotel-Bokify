import React from 'react'
import MainNavigtor from './src/navigator'
import {Provider} from 'react-redux'
import store from './src/redux/store'
import {StatusBar} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { colors } from './src/constants/colors'
console.log(StatusBar.currentHeight
)


const App = () => {
  return (
    <Provider store={store}> 
        <StatusBar  translucent={true} backgroundColor={'transparent'}  />
      <MainNavigtor />
    </Provider>
  )
}


export default App