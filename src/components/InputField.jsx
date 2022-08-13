import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

const InputField = ({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  onChange,
  multiline,
  numberOfLines,
}) => (
  <View style={styles.container}>
    {icon}
    {inputType == "password" ? (
      <TextInput
        placeholder={label}
        keyboardType={keyboardType}
        style={{ flex: 1, paddingVertical: 0 }}
        secureTextEntry={true}
        onChangeText={onChange}
      />
    ) : (
      <TextInput
        placeholder={label}
        keyboardType={keyboardType}
        style={styles.input}
        onChangeText={onChange}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
    )}
    <TouchableOpacity onPress={fieldButtonFunction}>
      <Text style={styles.label}>{fieldButtonLabel}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
  },
  input: { flex: 1, paddingVertical: 0 },
  label: { color: "#AD40AF", fontWeight: "700" },
});

export default InputField;
