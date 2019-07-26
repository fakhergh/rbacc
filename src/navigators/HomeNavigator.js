import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";

import Statistics from "../screens/home/StatisticsScreen";
import Transactions from "../screens/home/TransactionsScreen";
import Profile from "../screens/home/ProfileScreen";

import { COLORS } from "../tools/colors";

export default createMaterialBottomTabNavigator(
  {
    statistics: Statistics,
    transactions: Transactions,
    profile: Profile
  },
  {
    barStyle: { backgroundColor: COLORS.icons },
    activeTintColor: COLORS.primaryText,
    inactiveTintColor: COLORS.secondaryText,
    defaultNavigationOptions: ({
      navigation: {
        state: { routeName }
      }
    }) => ({
      tabBarLabel: routeName.charAt(0).toUpperCase() + routeName.substr(1),
      tabBarIcon: ({ focused, tintColor }) => {
        let name = "";
        switch (routeName) {
          case "statistics":
            name = "timeline";
            break;
          case "transactions":
            name = "swap-vert";
            break;
          case "profile":
            name = "account-circle";
        }
        return <Icon name={name} size={focused ? 25 : 24} color={tintColor} />;
      }
    })
  }
);
