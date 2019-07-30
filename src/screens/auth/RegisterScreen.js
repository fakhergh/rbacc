import React from "react";
import { View, Text, Button } from "react-native";

import { COLORS } from '../../tools/colors';

const Register = ({ navigation: { openDrawer } }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.icons }}>
      <Text>Register</Text>
      <Button title={"Open Drawer"} onPress={() => openDrawer()} />
    </View>
  );
};

export default Register;
