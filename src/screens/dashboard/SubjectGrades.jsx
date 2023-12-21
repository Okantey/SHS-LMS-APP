import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default SubjectGrades = () => {
  return (
    <SafeAreaView className="flex-1 bg-white px-4 flex justify-center items-center">
      <StatusBar backgroundColor="black" style="light" />
      <Text style={{ fontFamily: "lato-bold", fontSize: 18 }}>
        No Grades To Show
      </Text>
    </SafeAreaView>
  );
};
