import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import React from "react";
import InputField from "../components/InputField";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import { useDispatch } from "react-redux";
import { postAppointment } from "../redux/doctorSlice";

const AboutUs = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  //Checks if the fields are filled before dispatching the action
  const setAppointment = () => {
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.description === ""
    ) {
      setMessage("Please fill all fields!");
    } else {
      dispatch(postAppointment(formData));
      setMessage("Appointment Posted!");
    }
  };

  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../assets/images/aboutlogo.jpg")}
        resizeMode="contain"
        style={styles.image}
      />
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Get In Touch!</Text>
          <InputField
            onChange={(name) => setFormData({ ...formData, name: name })}
            label={"Full Name"}
            icon={
              <Ionicons
                name="person-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
          />

          <InputField
            onChange={(email) =>
              setFormData({ ...formData, email: email.toLowerCase() })
            }
            label={"Email "}
            icon={
              <MaterialIcons
                name="alternate-email"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
            keyboardType="email-address"
          />
          <InputField
            onChange={(description) =>
              setFormData({ ...formData, description: description })
            }
            label={"Description"}
            multiline={true}
            numberOfLines={3}
            keyboardType="email-address"
          />
          <CustomButton label="Submit" onPress={setAppointment} />
          {message !== null ? (
            <Text style={styles.submitText}>{message}</Text>
          ) : null}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  image: { height: 400, width: 400 },
  container: {
    padding: 20,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 12,
    margin: 10,
  },
  title: { fontFamily: "montserratBold", textAlign: "center" },
  submitText: { fontFamily: "montserratBold", textAlign: "center" },
});
