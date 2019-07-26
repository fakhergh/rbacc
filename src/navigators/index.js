import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import authStack from "./AuthNavigator";
import mainStack from "./MainNavigator";

import AuthLoading from "../screens/auth/AuthLoadingScreen";

const appStack = createSwitchNavigator(
  {
    authLoading: AuthLoading,
    auth: authStack,
    main: mainStack
  },
  {
    // initialRouteName: "main"
  }
);

export default createAppContainer(appStack);
