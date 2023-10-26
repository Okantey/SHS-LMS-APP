import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  Image,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { styles } from "../../global.styles";
import logo from "../../../assets/images/new-lms.png";
import { useState, useEffect } from "react";
import Axios from "../../api/Axios";
import { colors } from "../../global.styles";
import { useNavigation } from "@react-navigation/native";

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
      console.log(response.data.data);
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
      <View className="w-full flex flex-row justify-center my-4">
        <Image source={logo} />
      </View>
      <Text style={styles.headerText} className="text-center">
        Welcome Back!
      </Text>
      <Text style={styles.basic} className="text-xl my-2 text-center">
        Please select your school to continue
      </Text>
      {isLoading ? (
        <View className="flex justify-center items-center mt-6">
          <ActivityIndicator color={colors.orange} size="large" />
          <Text style={styles.basic} className="text-orange text-xl my-2">
            Getting schools data
          </Text>
        </View>
      ) : (
        schools.map((school) => {
          return (
            <TouchableOpacity
              key={school.id}
              className="w-full flex items-center flex-row border-t border-b py-2 my-2"
              onPress={() => navigation.navigate("Login", { id: school.id })}
            >
              <Image
                source={{ uri: `${baseURL}${school.logo}` }}
                className="w-8 h-12 object-contain"
              />
              <Text
                style={{ fontFamily: "lato-regular" }}
                className="text-xl ml-3 text-gray-600"
              >
                {school.name}
              </Text>
            </TouchableOpacity>
          );
        })
      )}
    </SafeAreaView>
  );
};
