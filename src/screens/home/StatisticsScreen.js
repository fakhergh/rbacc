import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Divider } from "react-native-paper";

import { COLORS } from "../../tools/colors";

const Statistics = () => {
  return (
    <View style={style.container}>
      <View style={style.chartContainer}>
        <Text>Pie Chart card view for transactions will be here</Text>
      </View>
      <Divider />
      <View style={style.chartContainer}>
        <Text>Line Chart card view for transactions will be here</Text>
      </View>
      <Divider />
      <View style={style.chartContainer}>
        <Text>Other details...</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.icons },
  chartContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Statistics;
