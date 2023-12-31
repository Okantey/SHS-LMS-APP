import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Search } from "../../components";
import { colors, styles } from "../../global.styles";
import Axios from "../../api/Axios";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import martin from "../../../assets/martin.jpg";
import { StatusBar } from "expo-status-bar";

export default Dashboard = ({ navigation }) => {
  const { user, token, setSubject } = useContext(AuthContext);
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const SUBJECTS_URL = "/lms/registered_subjects";
  const name = user.user_info.first_name;

  const getRandomColor = (() => {
    const colorList = ["#FFD700", "#33A3FF", "#33FF57", "#FF3385", "#33A3FF"];
    let currentIndex = 0;
    return () => {
      const color = colorList[currentIndex];
      currentIndex = (currentIndex + 1) % colorList.length;
      return color;
    };
  })();

  const handleSubjectsFetch = async () => {
    setIsLoading(true);
    try {
      const response = await Axios.get(SUBJECTS_URL, {
        headers: { Authorization: `Token ${token}` },
      });
      const loadedSubjects = await response.data.data;
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

  const filteredSubjects = subjects.filter((subject) =>
    subject.subject_name.toLowerCase().includes(search.toLowerCase())
  );

  const handleNavigation = (name) => {
    if (name) {
      setSubject(name);
      navigation.navigate("SubjectStack", {
        screen: "SubjectDetails",
      });
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white px-4">
      <StatusBar backgroundColor="black" style="light" />
      {isLoading ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size={50} color={colors.blue} />
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
              source={martin}
              className="w-12 h-12 object-contain rounded-full"
            />
          </View>
          <Search search={search} setSearch={setSearch} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View className="flex flex-row items-center justify-between mb-4">
              <Text style={{ fontFamily: "lato-bold" }} className="text-2xl">
                Subjects
              </Text>
              <MaterialCommunityIcons
                name="gesture-swipe"
                size={30}
                color="black"
              />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View className="my-2 w-full flex">
                {filteredSubjects.map((subject) => (
                  <TouchableOpacity
                    onPress={() => handleNavigation(subject.subject_name)}
                    key={subject.subject_code}
                    className="flex w-full h-32 justify-center items-center rounded-xl mb-2"
                  >
                    <View
                      style={{
                        backgroundColor: getRandomColor(),
                      }}
                      className="w-full h-full flex justify-center items-center rounded-xl"
                    >
                      <FontAwesome5
                        name="user-graduate"
                        size={36}
                        color="black"
                      />
                      <Text
                        style={{ fontFamily: "lato-regular" }}
                        className="text-lg mt-2 w-full text-center"
                      >
                        {subject.subject_name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};
