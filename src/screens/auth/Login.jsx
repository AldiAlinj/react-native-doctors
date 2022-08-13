import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getErrors, loginUser, getLoading } from "../../redux/doctorSlice";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import InputField from "../../components/InputField";
import CustomButton from "../../components/CustomButton";
const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const error = useSelector(getErrors);
  const loading = useSelector(getLoading);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const login = () => {
    dispatch(loginUser(formData));
  };

  return loading ? (
    <View style={styles.loading}>
      <Text style={{ fontSize: 20 }}>Loading...</Text>
    </View>
  ) : (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 25 }}>
        <Text style={styles.title}>Login</Text>

        <InputField
          label={"Email ID"}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          onChange={(email) =>
            setFormData({ ...formData, email: email.toLowerCase() })
          }
          keyboardType="email-address"
        />

        <InputField
          label={"Password"}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
          onChange={(password) =>
            setFormData({ ...formData, password: password })
          }
        />

        <CustomButton label={"Login"} onPress={login} />

        {error !== null ? (
          <View style={styles.error}>
            <Text style={{ color: "red", fontWeight: "700" }}>{error}</Text>
          </View>
        ) : null}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{ color: "#AD40AF", fontWeight: "700" }}>
              {" "}
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
const styles = StyleSheet.create({
  loading: { flex: 1, justifyContent: "center", alignItems: "center" },
  container: { flex: 1, justifyContent: "center" },
  title: {
    fontSize: 28,
    fontWeight: "500",
    color: "#333",
    marginBottom: 30,
  },
  error: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
});
