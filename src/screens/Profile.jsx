import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { getUser } from "../redux/doctorSlice";
import Ionicons from "react-native-vector-icons/Ionicons";

const Profile = ({ navigation }) => {
  const user = useSelector(getUser);

  const userData = [
    {
      type: user.height + " cm",
      label: "Height",
    },
    {
      type: user.weight + " kg",
      label: "Weight",
    },
    {
      type: user.bloodType,
      label: "Blood Type",
    },
    {
      type: user.birthDate,
      label: "Birth Date",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons name="close" size={30} />
        </TouchableOpacity>
        <View>
          <Text style={{ fontFamily: "montserratBold" }}>Profile</Text>
        </View>
      </View>
      <View style={styles.idContainer}>
        <View>
          <Image
            source={require("../assets/images/user-profile.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={{ fontFamily: "montserratBold" }}>{user.fullName}</Text>
          <Text style={{ fontFamily: "montserratBold", fontSize: 20 }}>
            Medical ID
          </Text>
        </View>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <FlatList
          data={userData}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text
                style={{ textAlign: "center", fontFamily: "montserratBold" }}
              >
                {item.type}
              </Text>
              <Text style={{ textAlign: "center", fontFamily: "montserrat" }}>
                {item.label}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: { marginTop: StatusBar.currentHeight },
  header: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 25,
    justifyContent: "space-between",
  },
  idContainer: {
    backgroundColor: "lightgray",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    width: "90%",
    margin: 20,
    borderRadius: 15,
  },
  image: { width: 100, height: 100, borderRadius: 15 },
  infoContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
    marginLeft: 10,
  },
  card: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: 5,
    alignItems: "center",
    height: 160,
    width: 100,
    margin: 10,
    backgroundColor: "lightgray",
    borderRadius: 12,
  },
});
