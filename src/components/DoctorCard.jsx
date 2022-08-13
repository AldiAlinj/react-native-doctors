import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const DoctorCard = ({ item }) => {
  const navigation = useNavigation();
  const renderStars = (stars) => {
    let starsAmount = [];
    for (let i = 0; i < stars; i++) {
      starsAmount.push(
        <Ionicons name="star" color="yellow" height={10} width={10} key={i} />
      );
    }
    return starsAmount;
  };

  const openProfile = () => {
    navigation.navigate("DoctorProfile", { doctor: item });
  };
  return (
    <TouchableOpacity onPress={openProfile}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.avatar }} style={styles.image} />
        </View>
        <View>
          <Text style={styles.doctorName}>
            {item.first_name + " " + item.last_name}
          </Text>
          <Text style={styles.doctorType}>{item.type}</Text>
          <View style={styles.starContainer}>
            {renderStars(item.rating, item.id)}
            <Text
              style={styles.experience}
            >{`+${item.years} Years Experience`}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DoctorCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,
    flexDirection: "row",
    padding: 10,
    margin: 10,
    marginLeft: 40,
    backgroundColor: "lightgray",
    width: "80%",
  },
  imageContainer: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: { width: 50, height: 50 },
  doctorName: { fontSize: 15, fontFamily: "montserratBold" },
  doctorType: { fontFamily: "montserrat" },
  starContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  experience: { marginLeft: 5, fontFamily: "montserrat" },
});
