import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getErrors, loginUser } from "../../redux/doctorSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const error = useSelector(getErrors)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const login = () => {
    dispatch(loginUser(formData));
  };

  const navigateRegistration = () => {
    navigation.navigate("Register");
  };


  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/favicon.png")}
      />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) =>
            setFormData({ ...formData, email: email.toLowerCase() })
          }
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) =>
            setFormData({ ...formData, password: password })
          }
        />
      </View>
      {
        error === null ? null : 
        <View>
          <Text>{error}</Text>
        </View>
      }

      <TouchableOpacity onPress={navigateRegistration}>
        <Text style={styles.forgot_button}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={login}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});

export default Login;
