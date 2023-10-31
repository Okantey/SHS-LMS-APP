import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
export default CustomTopTab = ({ name }) => {
  return (
    <View className="flex px-4 flex-row items-center ">
      <FontAwesome5 name="user-graduate" size={36} color="black" />
      <Text style={{ fontSize: 24, fontFamily: "lato-bold" }} className="ml-4">
        {name}
      </Text>
    </View>
  );
};
