import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
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
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "lightgray",
          padding: 20,
        }}
      >
        <View
          style={{
            width: "20%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: doctor.avatar }}
            style={{ width: 100, height: 100 }}
          />
        </View>
        <View
          style={{
            width: "80%",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              fontFamily: "montserratBold",
            }}
          >
            {doctor.first_name + " " + doctor.last_name}
          </Text>
          <Text style={{ fontFamily: "montserrat" }}>{doctor.type}</Text>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontSize: 18,
            marginLeft: 10,
            marginBottom: 20,
            fontFamily: "montserratBold",
          }}
        >
          Description
        </Text>
        <Text style={{ marginLeft: 10, fontFamily: "montserrat" }}>
          {doctor.description}
        </Text>
        <View style={{marginTop: 20, paddingHorizontal: 40}}>
        <CustomButton label='Contact' onPress={() => navigation.navigate('About Us')} />
        </View>
      </View>
    </View>
  );
};

export default DoctorProfile;
