import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import MainScreen from '../screens/MainScreen'
import AddToDoScreen from '../screens/AddToDoScreen'

export default createAppContainer(
  createStackNavigator({
    Main: MainScreen,
    AddToDo:AddToDoScreen
  })
);
