import React from "react";
import { View, Text, Button } from "react-native";

const Login = ({ navigation: { navigate, openDrawer } }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Text>Login</Text>
      <Button title={"Open Drawer"} onPress={() => openDrawer()} />
    </View>
  );
};

export default Login;
