import { createStackNavigator } from "react-navigation";

import Login from "../screens/auth/LoginScreen";
import Register from "../screens/auth/RegisterScreen";

export default createStackNavigator({
  login: Login,
  register: Register
});
