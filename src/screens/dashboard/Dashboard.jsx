import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Image, ScrollView, ActivityIndicator } from "react-native";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Search } from "../../components";
import { colors, styles } from "../../global.styles";
import Axios from "../../api/Axios";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default Dashboard = () => {
  const { user, token } = useContext(AuthContext);
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const SUBJECTS_URL = "/lms/registered_subjects";
  const name = user.user_info.first_name;

  const getRandomColor = (() => {
    const colorList = ["yellow", "blue", "pink", "purple", "violet"];
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

  const filteredSubjects = subjects.filter((subject) =>
    subject.name.toLowerCase().includes(search.toLowerCase())
  );

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
                Welcome,
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
            <Search search={search} setSearch={setSearch} />
            <View className="flex flex-row items-center justify-between mb-4">
              <Text style={{ fontFamily: "lato-bold" }} className="text-xl">
                Subjects
              </Text>
              <MaterialCommunityIcons
                name="gesture-swipe"
                size={30}
                color="black"
              />
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                }}
                className="my-4"
              >
                {filteredSubjects.map((subject) => (
                  <View
                    key={subject.code}
                    className="flex w-max h-32 justify-center items-center rounded-xl mr-4"
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
                    </View>
                    <Text
                      style={{ fontFamily: "lato-regular" }}
                      className="text-lg w-full"
                    >
                      {subject.name}
                    </Text>
                  </View>
                ))}
              </View>
            </ScrollView>
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};
