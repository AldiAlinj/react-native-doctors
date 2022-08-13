import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomButton from "../components/CustomButton";

const DoctorProfile = ({ route, navigation }) => {
  const { doctor } = route.params;

  return (
    <View style={{ marginTop: StatusBar.currentHeight }}>
      <TouchableOpacity
        style={{ margin: 10 }}
        onPress={() => navigation.navigate("Home")}
      >
        <Ionicons name="arrow-back" size={50} />
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: doctor.avatar }}
            style={{ width: 100, height: 100 }}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.doctorName}>
            {doctor.first_name + " " + doctor.last_name}
          </Text>
          <Text style={{ fontFamily: "montserrat" }}>{doctor.type}</Text>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.descriptionContainer}>Description</Text>
        <Text style={styles.description}>{doctor.description}</Text>
        <View style={styles.buttonContainer}>
          <CustomButton
            label="Contact"
            onPress={() => navigation.navigate("About Us")}
          />
        </View>
      </View>
    </View>
  );
};

export default DoctorProfile;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "lightgray",
    padding: 20,
  },
  imageContainer: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    width: "80%",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  doctorName: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "montserratBold",
  },
  descriptionContainer: {
    fontSize: 18,
    marginLeft: 10,
    marginBottom: 20,
    fontFamily: "montserratBold",
  },
  description: { marginLeft: 10, fontFamily: "montserrat" },
  buttonContainer: { marginTop: 20, paddingHorizontal: 40 },
});
