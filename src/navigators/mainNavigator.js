import React from "react";
import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialIcons";
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons';

import Home from "../screens/home/HomeScreen";
import Account from "../screens/home/AccountScreen";
import Settings from "../screens/home/SettingsScreen";

import { COLORS } from "../tools/colors";

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

export default createDrawerNavigator(
  {
    home: createStackNavigator(
      {
        default: Home
      },
      {
        defaultNavigationOptions: ({ navigation: { openDrawer } }) => ({
          title: "Home",
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
    account: createStackNavigator(
      {
        default: Account
      },
      {
        defaultNavigationOptions: ({ navigation: { openDrawer } }) => ({
          title: "My account",
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
    drawerType: "back", // drawerType can be back | front | slide  so you can try all of them if you want
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
          case "home":
            name = "home";
            break;
          case "account":
            name = "account-circle";
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
