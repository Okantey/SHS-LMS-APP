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
  SubjectDetails,
  SubjectParticipants,
  SubjectGrades,
} from "./../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomTopTab from "../components/CustomTopTab";
import { colors } from "../global.styles";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Stack = createNativeStackNavigator();
const TopTab = createMaterialTopTabNavigator();

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
      <Stack.Screen name="SubjectStack" component={SubjectStack} />
    </Stack.Navigator>
  );
};

const SubjectStack = () => {
  const { subject } = useContext(AuthContext);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <CustomTopTab name={subject} />
      <TopTab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontFamily: "lato-bold", fontSize: 14 },
          tabBarActiveTintColor: colors.blue,
          tabBarInactiveTintColor: "gray",
        }}
      >
        <TopTab.Screen
          name="SubjectDetails"
          component={SubjectDetails}
          options={{ title: "Course" }}
        />
        <TopTab.Screen
          name="SubjectParticipants"
          component={SubjectParticipants}
          options={{ title: "Participants" }}
        />
        <TopTab.Screen
          name="SubjectGrades"
          component={SubjectGrades}
          options={{ title: "Grades" }}
        />
      </TopTab.Navigator>
    </SafeAreaView>
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
