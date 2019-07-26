import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CreateTransaction = () => {
  return (
    <View style={styles.container}>
      <Text>Create transaction form will be here</Text>
    </View>
  );
};

CreateTransaction.navigationOptions = { headerTitle: "Create new transaction" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default CreateTransaction;
