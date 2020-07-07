import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { PaintingProvider } from './src/context/PaintingContext'
import HomeScreen from './src/screens/HomeScreen'
import AdminScreen from './src/screens/AdminScreen'
import LoginScreen from './src/screens/LoginScreen'
import SearchScreen from './src/screens/SearchScreen'

const navigator = createStackNavigator({
  Home: HomeScreen,
  Login: LoginScreen,
  Admin: AdminScreen,
  Search: SearchScreen

}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Damage Control: Painting Edition'
  }
})

const App = createAppContainer(navigator)

export default () => {
  return (
    <PaintingProvider>
      <App />
    </PaintingProvider>
  )
}