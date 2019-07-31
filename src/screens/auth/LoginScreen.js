import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { COLORS } from "../../tools/colors";
import { Divider } from "react-native-paper";

const Login = ({ navigation: { navigate } }) => {
  // you can use only one state with object that contains both of email & password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
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
      <Button title={"Login"} onPress={() => navigate("main")} />
      <View style={styles.signUpTextContainer}>
        <Text>Don't have accout? </Text>
        <TouchableOpacity onPress={() => navigate("register")}>
          <Text style={styles.signUpTextButton}>Sing up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Login.navigationOptions = {
  header: null
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
  },
  signUpTextContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center"
  },
  signUpTextButton: {
    color: COLORS.primary
  }
});

export default Login;
