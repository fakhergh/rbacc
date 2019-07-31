import React from "react";
import { View, Text, Button } from "react-native";

const AuthLoading = ({ navigation: { navigate } }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>AuthLoading</Text>
      <Text>Check your token here</Text>
      <Text>(if exists redirect to home page, otherwise to login screen)</Text>
      <Button title={"Go to login"} onPress={() => navigate("login")} />
    </View>
  );
};

export default AuthLoading;
