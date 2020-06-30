import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen';
import AdminScreen from "./src/screens/AdminScreen";


const navigator = createStackNavigator({
  Home: HomeScreen,
  Admin: AdminScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Home'
  }
})

export default createAppContainer(navigator)