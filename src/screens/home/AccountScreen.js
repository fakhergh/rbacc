import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { COLORS } from "../../tools/colors";

const Account = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <Text>Account Screen</Text>
      <Button title={"Logout"} onPress={() => navigate("authLoading")} />
    </View>
  );
};

Account.navigationOptions = { headerTitle: "Account" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.backgroundColor
  }
});

export default Account;
