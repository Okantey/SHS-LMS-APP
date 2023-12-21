import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  Image,
  View,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { styles } from "../../global.styles";
import { useState, useEffect } from "react";
import Axios from "../../api/Axios";
import { colors } from "../../global.styles";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export default SelectSchool = () => {
  const navigation = useNavigation();
  let baseURL = "https://kwesistigar.pythonanywhere.com";
  const SCHOOLS_URL = "/lms/schools";
  const [schools, setSchools] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const handleSchoolsFetch = async () => {
    setIsLoading(true);
    try {
      const response = await Axios.get(SCHOOLS_URL);
      const loadedSchools = response.data.data;
      setSchools(loadedSchools);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleSchoolsFetch();
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 px-4 pt-6">
      <StatusBar backgroundColor="black" style="light" />
      <View className="w-full flex flex-row justify-center my-4">
        <Image
          source={{
            uri: "https://img.freepik.com/premium-vector/flat-web-template-with-lms-concept-design-concept-learning-management-system_100456-8728.jpg?size=626&ext=jpg&ga=GA1.1.941783686.1692185846&semt=ais",
          }}
          className="w-40 h-32 object-cover"
        />
      </View>
      <Text style={styles.headerText} className="text-center">
        Welcome Back!
      </Text>
      <Text style={styles.basic} className="text-xl my-2 text-center">
        Please select your school to continue
      </Text>
      <View className="flex w-full my-2 flex-row items-center bg-gray-50 border-blue border rounded-lg shadow-inner">
        <TextInput
          placeholder="Search for a school"
          className="flex-1 text-lg px-2"
          style={{ fontFamily: "lato-regular" }}
        />
        <View className="bg-blue p-4">
          <AntDesign name="search1" size={24} color="white" />
        </View>
      </View>
      {isLoading ? (
        <View className="flex justify-center items-center mt-6">
          <Text
            style={{ fontFamily: "lato-bold" }}
            className="text-blue text-xl my-2"
          >
            Getting schools data
          </Text>
          <ActivityIndicator color={colors.blue} size="large" />
        </View>
      ) : (
        <ScrollView className="w-full" showsVerticalScrollIndicator={false}>
          {schools.map((school) => {
            return (
              <TouchableOpacity
                key={school.id}
                className="w-full flex items-center justify-between flex-row border-b py-2 my-2"
                onPress={() =>
                  navigation.navigate("Login", {
                    name: school.name,
                    schoolID: school.id,
                  })
                }
              >
                <View className="flex flex-row items-center">
                  <Image
                    source={{ uri: `${baseURL}${school.logo}` }}
                    className="w-8 h-12 object-cover"
                  />
                  <Text
                    style={{ fontFamily: "lato-regular" }}
                    className="text-xl ml-3 text-gray-600"
                  >
                    {school.name}
                  </Text>
                </View>
                <Feather name="arrow-right-circle" size={30} color="gray" />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
