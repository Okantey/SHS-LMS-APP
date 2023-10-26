import { NavigationContainer } from "@react-navigation/native";
import { MainStack } from "./StackNavigation";
import { AuthProvider } from "../context/AuthContext";

export default MainNavigation = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </AuthProvider>
  );
};
