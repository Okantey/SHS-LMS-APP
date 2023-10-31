import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default SubjectGrades = () => {
  return (
    <SafeAreaView className="flex-1 bg-white px-4 flex justify-center items-center">
      <Text style={{ fontFamily: "lato-bold", fontSize: 18 }}>
        No Grades To Show
      </Text>
    </SafeAreaView>
  );
};
