import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { COLORS } from "../../tools/colors";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

Home.navigationOptions = { headerTitle: "Home" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.backgroundColor
  }
});

export default Home;
