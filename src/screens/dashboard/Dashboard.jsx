import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Image, ScrollView } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Search } from "../../components";
import { styles } from "../../global.styles";

export default Dashboard = () => {
  const { user, token } = useContext(AuthContext);
  console.log("Login Successful");
  console.log(token);
  // console.log(user);
  const name = user.user_info.first_name;
  return (
    <SafeAreaView className="flex-1 bg-white px-4">
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
          Courses
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
