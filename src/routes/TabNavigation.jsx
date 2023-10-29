import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  DashboardStack,
  MessagesStack,
  NotificationsStack,
  PlannerStack,
  AccountStack,
} from "./StackNavigation";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
export default TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarLabelStyle: { fontFamily: "lato-bold", fontSize: 18 },
        tabBarActiveTintColor: "#3b82f6",
        tabBarInactiveTintColor: "gray",
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          width: "100%",
          alignSelf: "center",
          height: 65,
          paddingVertical: 0,
          backgroundColor: "white",
        },
      }}
    >
      <Tab.Screen
        name="DashboardStack"
        component={DashboardStack}
        options={{
          tabBarIcon: (props) => (
            <FontAwesome
              name="dashboard"
              size={32}
              color={props.focused ? "#3b82f6" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MessagesStack"
        component={MessagesStack}
        options={{
          tabBarIcon: (props) => (
            <FontAwesome
              name="wechat"
              size={30}
              color={props.focused ? "#3b82f6" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationsStack"
        component={NotificationsStack}
        options={{
          tabBarIcon: (props) => (
            <FontAwesome
              name="bell"
              size={30}
              color={props.focused ? "#3b82f6" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PlannerStack"
        component={PlannerStack}
        options={{
          tabBarIcon: (props) => (
            <FontAwesome
              name="calendar"
              size={30}
              color={props.focused ? "#3b82f6" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AccountTab"
        component={AccountStack}
        options={{
          tabBarIcon: (props) => (
            <Ionicons
              name="person"
              size={30}
              color={props.focused ? "#3b82f6" : "gray"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
