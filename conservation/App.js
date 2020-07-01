import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import AdminScreen from './src/screens/AdminScreen'
import LoginScreen from './src/screens/LoginScreen'
import { useNavigation } from '@react-navigation/native'
// import { useState } from 'react';


const navigator = createStackNavigator({
  Home: HomeScreen,
  Admin: AdminScreen,
  Login: LoginScreen

}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Damage Control: Painting Edition'
  }
})

// const [displayImage, setDisplayImage] = useState('')
// const [objectID, setObjectID] = useState

export default createAppContainer(navigator)