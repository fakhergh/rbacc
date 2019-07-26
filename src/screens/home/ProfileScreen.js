import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { COLORS } from "../../tools/colors";

const Profile = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <View style={styles.userDetailsContainer}>
        <Text>* User avatar</Text>
        <Text>* Profile Details</Text>
      </View>

      <View style={styles.actionsContainer}>
        <Button title={"Settings"} onPress={() => navigate("settings")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  userDetailsContainer: {
    flex: 1
  },
  actionsContainer: {
    padding: 24,
    marginVertical: 24
  }
});

export default Profile;
