import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import AuthLoading from "../screens/auth/AuthLoadingScreen";

import authStack from "./authNavigator";
import mainStack from "./mainNavigator";

export default createAppContainer(
  createSwitchNavigator({
    authLoading: AuthLoading,
    auth: authStack,
    main: mainStack
  })
);
