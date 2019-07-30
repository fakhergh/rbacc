import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Settings = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text>Settings</Text>
        <Text>* Contact us</Text>
        <Text>* About us</Text>
        <Text>* Other options...</Text>
      </View>

      <View style={{ padding: 24 }}>
        <Button title={"Logout"} onPress={() => navigate("login")} />
      </View>
    </View>
  );
};

Settings.navigationOptions = { headerTitle: "Settings" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white"
  }
});

export default Settings;
