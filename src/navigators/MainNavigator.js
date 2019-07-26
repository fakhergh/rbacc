import React from "react";
import { createStackNavigator } from "react-navigation";
import {
  HeaderButton,
  HeaderButtons,
  Item
} from "react-navigation-header-buttons";
import Icon from "react-native-vector-icons/MaterialIcons";

import { COLORS } from "../tools/colors";

import homeStack from "./HomeNavigator";

import CreateTransaction from "../screens/home/CreateTransactionScreen";
import Settings from "../screens/home/SettingsScreen";

const IconHeaderButton = passMeFurther => (
  <HeaderButton
    {...passMeFurther}
    IconComponent={Icon}
    iconSize={24}
    color={COLORS.icons}
  />
);

const HeaderRight = () => {
  return (
    <HeaderButtons HeaderButtonComponent={IconHeaderButton}>
      <Item title="Search" iconName="search" onPress={() => alert("Search")} />
      <Item
        title="Notifications"
        iconName="notifications"
        onPress={() => alert("Notifications")}
      />
    </HeaderButtons>
  );
};

export default createStackNavigator(
  {
    home: {
      screen: homeStack,
      navigationOptions: { headerRight: <HeaderRight /> }
    },
    createTransaction: CreateTransaction,
    settings: Settings
  },
  {
    defaultNavigationOptions: {
      headerTitle: "RBACC",
      headerTitleStyle: { color: COLORS.icons },
      headerStyle: { backgroundColor: COLORS.primary },
      headerTintColor: COLORS.icons
    }
  }
);
