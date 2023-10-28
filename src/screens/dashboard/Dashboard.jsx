import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Image, ScrollView, ActivityIndicator } from "react-native";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Search } from "../../components";
import { colors, styles } from "../../global.styles";
import Axios from "../../api/Axios";

export default Dashboard = () => {
  const { user, token } = useContext(AuthContext);
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log("Login Successful");
  console.log(token);
  const SUBJECTS_URL = "/lms/registered_subjects";
  const name = user.user_info.first_name;

  const handleSubjectsFetch = async () => {
    setIsLoading(true);
    try {
      const response = await Axios.get(SUBJECTS_URL, {
        headers: { Authorization: `Token ${token}` },
      });
      const loadedSubjects = await response.data;
      console.log(loadedSubjects);
      setSubjects(loadedSubjects);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    handleSubjectsFetch();
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white px-4">
      {isLoading ? (
        <View className="flex-1 justify-center items-center">
          <Text
            style={{ fontFamily: "lato-bold" }}
            className="text-2xl text-blue mb-2"
          >
            Loading
          </Text>
          <ActivityIndicator size="large" color={colors.blue} />
        </View>
      ) : (
        <View className="w-full">
          <View className="w-full flex flex-row justify-between items-center">
            <View>
              <Text
                style={{ fontFamily: "lato-bold" }}
                className="text-3xl text-black"
              >
                Dashboard
              </Text>
              <Text style={{ fontFamily: "lato-regular", fontSize: 20 }}>
                Welcome,{" "}
                <Text className="text-blue" style={{ fontFamily: "lato-bold" }}>
                  {name}
                </Text>
              </Text>
            </View>
            <Image
              source={{
                uri: "https://img.freepik.com/free-photo/happy-african-american-young-man-colorful-shirt-wearing-glasses-looking-camera-smiling-cheerfully_141793-108881.jpg?w=740&t=st=1698417032~exp=1698417632~hmac=7b862e2fcf31027441c2e466fb8ed89a9c308517ed66afa5f67bdf137f6f7850",
              }}
              className="w-12 h-12 object-contain rounded-full"
            />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Search />
            <Text style={styles.basic} className="text-xl">
              Subjects
            </Text>
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};
