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
import DoctorProfile from "./src/screens/DoctorProfile"
import { StatusBar } from "expo-status-bar";
import {  getToken  } from "./src/redux/doctorSlice";
import Profile from "./src/screens/Profile";
import CustomDrawer from "./src/components/CustomDrawer";
import { useFonts } from "expo-font";


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
      <Drawer.Navigator  drawerContent={props => <CustomDrawer {...props} />} initialRouteName="Home">
        <Drawer.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
        <Drawer.Screen options={{headerShown: false}}  name="Profile" component={Profile} />
        <Drawer.Screen  options={{headerShown: false}} name="AboutUs" component={AboutUs} />
        <Drawer.Screen   name='DoctorProfile' options={{drawerItemStyle:{height: 0}, headerShown: false }} component={DoctorProfile} />
      </Drawer.Navigator>
  );
};

const RootNavigation = () => {
  const token = useSelector(getToken)

  return (
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
  const [loaded] = useFonts({
    montserrat: require('./src/assets/fonts/Montserrat.ttf'),
    montserratBold: require('./src/assets/fonts/Montserrat-SemiBold.ttf')
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
