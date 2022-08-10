import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import AboutUs from '../screens/AboutUs'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';



const Drawer = createDrawerNavigator();


const LoggedStack = () => {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
    </Drawer.Navigator>
  </NavigationContainer>
  )
}

export default LoggedStack