import * as React from "react";
import "react-native-gesture-handler";
import { Provider, useSelector } from "react-redux";
import store from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from "./src/screens/auth/Login";
import Register from "./src/screens/auth/Register";
import HomeScreen from "./src/screens/HomeScreen";
import AboutUs from "./src/screens/AboutUs";
import { StatusBar } from "expo-status-bar";
import { getLoading, getToken, getUser } from "./src/redux/doctorSlice";
import { Text } from "react-native";


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AuthStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={Register}
        />
      </Stack.Navigator>
  );
};

const LoggedStack = () => {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="AboutUs" component={AboutUs} />
      </Drawer.Navigator>
  );
};

const RootNavigation = () => {
  const token = useSelector(getToken)
  const loading = useSelector(getLoading)

  return (
    loading ? 
    <Text>...Loading</Text>
    :
    <NavigationContainer>
    <StatusBar backgroundColor="black" />
    {
      token === null ? 
      <AuthStack /> : <LoggedStack />
    }
  </NavigationContainer>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
