import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logoutUser } from "../redux/doctorSlice";

const CustomDrawer = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const logout = () => {
    dispatch(logoutUser());
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#8200d6" }}
      >
        <ImageBackground
          source={require("../assets/images/menu-bg.jpeg")}
          style={{ padding: 20 }}
        >
          <Image
            source={require("../assets/images/user-profile.jpg")}
            style={styles.image}
          />
          <Text style={styles.userName}>{user.fullName}</Text>
        </ImageBackground>
        <View style={styles.itemContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.logoutContainer}>
        <TouchableOpacity onPress={logout} style={{ paddingVertical: 15 }}>
          <View style={styles.logoutButton}>
            <Ionicons name="exit-outline" size={22} />
            <Text style={styles.logoutLabel}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  userName: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 5,
  },
  itemContainer: { flex: 1, backgroundColor: "#fff", paddingTop: 10 },
  logoutContainer: { padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" },
  logoutButton: { flexDirection: "row", alignItems: "center" },
  logoutLabel: {
    fontSize: 15,
    marginLeft: 5,
    fontFamily: "montserratBold",
  },
});
