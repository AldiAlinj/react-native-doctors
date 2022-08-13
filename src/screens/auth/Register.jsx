import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, getErrors, getLoading } from "../../redux/doctorSlice";
import InputField from "../../components/InputField";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CustomButton from "../../components/CustomButton";
import DateTimePicker from "@react-native-community/datetimepicker";

const Register = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loading = useSelector(getLoading);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState("Date of Birth");
  const error = useSelector(getErrors);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    weight: "",
    height: "",
    bloodType: "",
    birthDate: "",
  });

  const registerUser = async () => {
    if (
      formData.email === "" ||
      formData.password === "" ||
      formData.fullName === "" ||
      formData.weight === "" ||
      formData.height === "" ||
      formData.bloodType === "" ||
      formData.birthDate === ""
    ) {
      alert("Please fill out all forms!");
    } else if (formData.password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      dispatch(createUser(formData));
    }
  };

  const onDateSelected = (e, value) => {
    setOpen(false);
    setDate(value.toString());
    setDobLabel(value.toString());
    setFormData({ ...formData, birthDate: value.toString() });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 25 }}
      >
        <Text style={styles.title}>Register</Text>
        <InputField
          onChange={(name) => setFormData({ ...formData, fullName: name })}
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
          label={"Email ID"}
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
          onChange={(password) =>
            setFormData({ ...formData, password: password })
          }
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
        />

        <InputField
          onChange={(confirmPassword) => setConfirmPassword(confirmPassword)}
          label={"Confirm Password"}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
        />
        <InputField
          onChange={(height) => setFormData({ ...formData, height: height })}
          label={"Height (in CM)"}
          icon={
            <Ionicons
              name="md-swap-vertical-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="numeric"
        />
        <InputField
          onChange={(weight) => setFormData({ ...formData, weight: weight })}
          label={"Weight (in KG)"}
          icon={
            <Ionicons
              name="md-timer-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="numeric"
        />
        <InputField
          onChange={(bloodType) =>
            setFormData({ ...formData, bloodType: bloodType })
          }
          label={"Blood Type"}
          icon={
            <Ionicons
              name="analytics-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
        />

        <View style={styles.datePicker}>
          <Ionicons
            name="calendar-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TouchableOpacity onPress={() => setOpen(true)}>
            <Text style={{ color: "#666", marginLeft: 5, marginTop: 5 }}>
              {dobLabel}
            </Text>
          </TouchableOpacity>
        </View>
        {open && (
          <DateTimePicker
            value={date}
            mode={"date"}
            display={Platform.OS === "ios" ? "spinner" : "default"}
            is24Hour={true}
            onChange={onDateSelected}
            // style={styleSheet.datePicker}
          />
        )}
        {error !== null ? (
          <View style={styles.error}>
            <Text style={styles.errorMessage}>{error}</Text>
          </View>
        ) : null}

        <CustomButton label={"Register"} onPress={registerUser} />

        <View style={styles.loginLink}>
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.loginButton}> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },

  title: {
    fontSize: 28,
    fontWeight: "500",
    color: "#333",
    marginTop: 60,
    marginBottom: 30,
  },
  datePicker: {
    flexDirection: "row",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 30,
  },
  error: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  errorMessage: { color: "red", fontWeight: "700" },
  loginLink: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  loginButton: { color: "#AD40AF", fontWeight: "700" },
});
