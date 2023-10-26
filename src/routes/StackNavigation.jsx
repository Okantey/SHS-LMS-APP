import { SelectSchool, SplashScreen } from "./../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import TabsNavigation from "./TabsNavigation";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StartUp" component={StartUp} />
      {/* <Stack.Screen name="AuthStack" component={AuthStack} /> */}
      {/* <Stack.Screen name="Tabs" component={TabsNavigation} /> */}
    </Stack.Navigator>
  );
};

const StartUp = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SelectSchool" component={SelectSchool} />
    </Stack.Navigator>
  );
};

export { MainStack, StartUp };
