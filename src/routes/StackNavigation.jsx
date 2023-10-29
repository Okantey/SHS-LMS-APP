import {
  SelectSchool,
  SplashScreen,
  SelectRole,
  Login,
  Dashboard,
  Messages,
  Notifications,
  Planner,
  Account,
} from "./../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StartUp" component={StartUp} />
      <Stack.Screen name="Tabs" component={TabNavigation} />
    </Stack.Navigator>
  );
};

const StartUp = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SelectRole" component={SelectRole} />
      <Stack.Screen name="SelectSchool" component={SelectSchool} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

const DashboardStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

const MessagesStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Messages" component={Messages} />
    </Stack.Navigator>
  );
};

const NotificationsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
};

const PlannerStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Planner" component={Planner} />
    </Stack.Navigator>
  );
};

const AccountStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  );
};

export {
  MainStack,
  StartUp,
  DashboardStack,
  MessagesStack,
  NotificationsStack,
  PlannerStack,
  AccountStack,
};
