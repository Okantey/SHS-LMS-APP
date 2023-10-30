import { View, Text } from "react-native";
import BackButton from "./BackButton";
export default CustomTopTab = ({ name }) => {
  return (
    <View className="flex px-4 flex-row items-center">
      <BackButton onPress={() => navigation.goBack()} />
      <Text>{name}</Text>
    </View>
  );
};
