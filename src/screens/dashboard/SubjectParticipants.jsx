import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackButton } from "../../components";
export default SubjectParticipants = () => {
  return (
    <SafeAreaView className="flex-1 bg-white px-4">
      <View className="flex flex-row items-center">
        <BackButton onPress={() => navigation.goBack()} />
        <Text>Hello Participants</Text>
      </View>
    </SafeAreaView>
  );
};