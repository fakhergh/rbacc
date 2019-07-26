import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import { FlatList } from "react-navigation";
import { Divider, FAB } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

import { COLORS } from "../../tools/colors";

const TransactionItem = ({ transaction, index }) => {
  return (
    <TouchableNativeFeedback
      onPress={() =>
        alert(
          "When scrolling to any bottom item just click on transaction tab to reset scroll to top"
        )
      }
    >
      <View style={styles.itemContainer}>
        <Text>Transaction n°: {index}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const Transactions = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Transactions</Text>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
          onPress={() =>
            alert(
              "Select Item list will be displayed to select a filter by transaction type"
            )
          }
        >
          <View>
            <Icon name={"filter-list"} size={30} color={COLORS.primaryText} />
          </View>
        </TouchableNativeFeedback>
      </View>
      <Divider />
      <FlatList
        data={Array.from({ length: 100 }).fill(0)}
        renderItem={({ item, index }) => (
          <TransactionItem index={index} transaction={item} />
        )}
        ItemSeparatorComponent={() => <Divider style={{ margin: 24 }} />}
        keyExtractor={(item, index) => index.toString()}
      />
      <FAB
        icon={"add"}
        color={COLORS.icons}
        style={styles.fab}
        onPress={() => navigate("createTransaction")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.icons,
    elevation: 3
  },
  headerText: {
    fontSize: 18,
    color: COLORS.primaryText
  },
  itemContainer: {
    height: 56,
    alignItems: "center",
    justifyContent: "center"
  },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 16,
    backgroundColor: COLORS.accent
  }
});

export default Transactions;
