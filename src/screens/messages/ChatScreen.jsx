import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BackButton } from "../../components";

export default ChatScreen = ({ navigation, route }) => {
  const { first, last } = route.params;
  return (
    <SafeAreaView className="flex-1 bg-white px-2 flex justify-between">
      <View>
        <View className="w-full flex flex-row items-center">
          <BackButton onPress={() => navigation.goBack()} />
          <Text style={{ fontFamily: "lato-bold", fontSize: 22 }}>
            {first} {last} - Personal Space
          </Text>
        </View>
      </View>
      <View className="w-full flex flex-row items-center">
        <TextInput
          placeholder="Type a message..."
          className="flex-1 bg-smoke py-4 px-4 rounded-full my-2 text-lg"
        />
        <View className="p-2 bg-blue rounded-full ml-2">
          <MaterialCommunityIcons name="send-circle" size={36} color="white" />
        </View>
      </View>
    </SafeAreaView>
  );
};
