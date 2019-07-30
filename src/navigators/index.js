import React, { useState } from "react";
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";
import { TouchableNativeFeedback, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { COLORS } from "../tools/colors";

import Statistics from "../screens/home/StatisticsScreen";
import Transactions from "../screens/home/TransactionsScreen";
import Settings from "../screens/home/SettingsScreen";
import {
  HeaderButton,
  HeaderButtons,
  Item
} from "react-navigation-header-buttons";

const HeaderLeft = ({ openDrawer }) => (
  <HeaderButtons left HeaderButtonComponent={IconHeaderButton}>
    <Item title="Menu" iconName="menu" onPress={openDrawer} />
  </HeaderButtons>
);

const IconHeaderButton = passMeFurther => (
  <HeaderButton
    {...passMeFurther}
    IconComponent={Icon}
    iconSize={24}
    color={COLORS.icons}
  />
);

const HeaderRight = () => (
  <HeaderButtons HeaderButtonComponent={IconHeaderButton}>
    <Item title="Search" iconName="search" onPress={() => alert("Search")} />
    <Item
      title="Notifications"
      iconName="notifications"
      onPress={() => alert("Notifications")}
    />
  </HeaderButtons>
);

const appStack = createDrawerNavigator(
  {
    statistics: createStackNavigator(
      {
        default: Statistics
      },
      {
        defaultNavigationOptions: ({ navigation: { openDrawer } }) => ({
          title: "Statistics",
          headerTitleStyle: {
            color: COLORS.icons
          },
          headerStyle: {
            backgroundColor: COLORS.primary
          },
          headerLeft: <HeaderLeft openDrawer={openDrawer} />,
          headerRight: <HeaderRight />
        })
      }
    ),
    transactions: createStackNavigator(
      {
        default: Transactions
      },
      {
        defaultNavigationOptions: ({ navigation: { openDrawer } }) => ({
          title: "Transactions",
          headerTitleStyle: {
            color: COLORS.icons
          },
          headerStyle: {
            backgroundColor: COLORS.primary
          },
          headerLeft: <HeaderLeft openDrawer={openDrawer} />,
          headerRight: <HeaderRight />
        })
      }
    ),
    settings: createStackNavigator(
      {
        default: Settings
      },
      {
        defaultNavigationOptions: ({ navigation: { openDrawer } }) => ({
          title: "Settings",
          headerTitleStyle: {
            color: COLORS.icons
          },
          headerStyle: {
            backgroundColor: COLORS.primary
          },
          headerLeft: <HeaderLeft openDrawer={openDrawer} />,
          headerRight: <HeaderRight />
        })
      }
    )
  },
  {
    drawerType: "back",
    contentOptions: {
      activeTintColor: COLORS.primary
    },
    defaultNavigationOptions: ({
      navigation: {
        state: { routeName }
      }
    }) => ({
      drawerLabel: routeName.charAt(0).toUpperCase() + routeName.substr(1), // to capitalize route names
      drawerIcon: ({ tintColor }) => {
        let name;
        switch (routeName) {
          case "statistics":
            name = "timeline";
            break;
          case "transactions":
            name = "swap-vert";
            break;
          case "settings":
            name = "settings";
            break;
        }
        return <Icon name={name} size={24} color={tintColor} />;
      }
    })
  }
);

export default createAppContainer(appStack);
