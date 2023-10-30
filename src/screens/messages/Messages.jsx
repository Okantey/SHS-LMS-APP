import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { Accordion } from "../../components";

export default Messages = () => {
  return (
    <SafeAreaView className="flex-1 px-4 bg-white">
      <Text>Hello Messages</Text>
      <Accordion
        title="Test Case"
        content="This is just a test case for the accordion"
      />
    </SafeAreaView>
  );
};
