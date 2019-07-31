import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";

import { COLORS } from "../../tools/colors";
import { Divider } from "react-native-paper";

const Register = ({ navigation: { navigate } }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an account</Text>
      <TextInput
        placeholder={"Email"}
        value={email}
        onChangeText={setEmail}
        keyboardType={"email-address"}
      />
      <Divider />
      <TextInput
        placeholder={"Password"}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Divider />
      <TextInput
        placeholder={"Phone Number"}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType={"phone-pad"}
      />
      <Button title={"Register"} onPress={() => navigate("main")} />
    </View>
  );
};

Register.navigationOptions = {
  headerStyle: {
    backgroundColor: "transparent"
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: COLORS.backgroundColor
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default Register;
