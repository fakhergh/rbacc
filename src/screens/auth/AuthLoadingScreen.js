import React from "react";
import { View, Text, Button } from "react-native";

const AuthLoading = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text>AuthLoading</Text>
      <Button title={"Go to login"} onPress={() => navigate("login")} />
    </View>
  );
};

export default AuthLoading;
