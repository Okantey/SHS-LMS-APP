import { TouchableOpacity, Text, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default SelectRole = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="px-4 bg-white flex-1 justify-center items-center">
      <View className="w-full flex flex-row justify-center my-4">
        <Image
          source={{
            uri: "https://img.freepik.com/premium-vector/flat-web-template-with-lms-concept-design-concept-learning-management-system_100456-8728.jpg?size=626&ext=jpg&ga=GA1.1.941783686.1692185846&semt=ais",
          }}
          className="w-40 h-32 object-cover"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("SelectSchool")}
        className="flex flex-row justify-center items-center rounded-lg shadow-sm shadow-gray-300 my-3 px-10 py-4"
      >
        <Image
          className="w-12 h-12 object-contain rounded-full"
          source={{
            uri: "https://img.freepik.com/premium-vector/university-student-character-concept-collection_762986-567.jpg?w=740",
          }}
        />
        <Text style={{ fontFamily: "lato-bold" }} className="text-xl mx-6">
          I am a Student
        </Text>
        <Feather name="arrow-right-circle" size={34} color="black" />
      </TouchableOpacity>
      <TouchableOpacity className="flex flex-row justify-center items-center rounded-lg shadow-sm shadow-gray-300 my-3 px-10 py-4">
        <Image
          className="w-12 h-12 object-contain rounded-full"
          source={{
            uri: "https://img.freepik.com/free-vector/afro-male-teacher-math-classroom_603843-1757.jpg?w=740&t=st=1698581247~exp=1698581847~hmac=61eea8462cc6462107e6d14d3116919f34c9722db8d46b689f39ab56edb9218a",
          }}
        />
        <Text style={{ fontFamily: "lato-bold" }} className="text-xl mx-6">
          I am a Teacher
        </Text>
        <Feather name="arrow-right-circle" size={34} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
