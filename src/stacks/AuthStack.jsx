import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';



const Stack = createNativeStackNavigator();

const AuthStack = () => {

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false}} name="Login" component={Login} />
      <Stack.Screen options={{ headerShown: false}} name="Register" component={Register} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AuthStack