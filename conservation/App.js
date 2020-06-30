import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen';
import AdminScreen from "./src/screens/AdminScreen";
// import { useState } from 'react';


const navigator = createStackNavigator({
  Home: HomeScreen,
  Admin: AdminScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Home'
  }
})

// const [displayImage, setDisplayImage] = useState('')
// const [objectID, setObjectID] = useState

export default createAppContainer(navigator)