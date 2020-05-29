import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Cupcake from '../screens/Cupcake'





const screens = {
  Home: {
      screen: Home,
  },
  Cupcake: {
        screen: Cupcake,
  }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);