import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const DoctorCard = ({ item }) => {
  const navigation = useNavigation();
  const renderStars = (stars) => {
    let starsAmount = [];
    for (let i = 0; i < stars; i++) {
      starsAmount.push(
        <Ionicons name="star" color="yellow" height={10} width={10}  key={i} />
      );
    }
    return starsAmount;
  };

  const openProfile = () => {
    navigation.navigate("DoctorProfile", { doctor: item })
  };
  return (
    <TouchableOpacity
      onPress={openProfile}
    >
      <View
        style={{
          flex: 1,
          borderRadius: 15,
          flexDirection: "row",
          padding: 10,
          margin: 10,
          marginLeft: 40,
          backgroundColor: "lightgray",
          width: "80%",
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
            source={{ uri: item.avatar }}
            style={{ width: 50, height: 50 }}
          />
        </View>
        <View>
          <Text style={{ fontSize: 15, fontFamily: 'montserratBold' }}>
            {item.first_name + " " + item.last_name}
          </Text>
          <Text style={{fontFamily: 'montserrat'}}>{item.type}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {renderStars(item.rating, item.id)}
            <Text
              style={{ marginLeft: 5, fontFamily: 'montserrat' }}
            >{`+${item.years} Years Experience`}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DoctorCard;
