import React from "react";
import { View, Text, Button } from "react-native";

const Login = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text>Login</Text>
      <Button title={"Go to home"} onPress={() => navigate("home")} />
    </View>
  );
};

export default Login;
