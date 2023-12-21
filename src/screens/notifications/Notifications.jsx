import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export default Notifications = () => {
  return (
    <SafeAreaView className="flex-1 bg-white flex justify-center items-center">
      <StatusBar backgroundColor="black" style="light" />
      <Image
        className="w-64 h-64 object-cover"
        source={{
          uri: "https://img.freepik.com/free-vector/push-notifications-concept-illustration_114360-4986.jpg?w=740&t=st=1698420587~exp=1698421187~hmac=2d4a54f829325f338240dce6a15b2d53b60d71e74c160126675a5c7b6951ced0",
        }}
      />
      <Text style={{ fontFamily: "lato-bold" }} className="text-2xl">
        No New Notifications
      </Text>
    </SafeAreaView>
  );
};
