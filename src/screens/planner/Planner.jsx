import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Image } from "react-native";
import { UserCalendar } from "../../components";
import { StatusBar } from "expo-status-bar";

export default Planner = () => {
  return (
    <SafeAreaView className="flex-1 px-4 bg-white">
      <StatusBar backgroundColor="black" style="light" />
      <View className="flex flex-row justify-between items-center">
        <Text style={{ fontFamily: "lato-bold", fontSize: 25 }}>Calendar</Text>
        <Image
          source={{
            uri: "https://img.freepik.com/free-photo/happy-african-american-young-man-colorful-shirt-wearing-glasses-looking-camera-smiling-cheerfully_141793-108881.jpg?w=740&t=st=1698417032~exp=1698417632~hmac=7b862e2fcf31027441c2e466fb8ed89a9c308517ed66afa5f67bdf137f6f7850",
          }}
          className="w-10 h-10 object-contain rounded-full"
        />
      </View>
      <UserCalendar />
    </SafeAreaView>
  );
};
