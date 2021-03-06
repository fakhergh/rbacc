import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { COLORS } from "../../tools/colors";

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
};

Settings.navigationOptions = { headerTitle: "Settings" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.backgroundColor
  }
});

export default Settings;
