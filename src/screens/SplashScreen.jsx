import { SafeAreaView } from "react-native-safe-area-context";
import { Image, ActivityIndicator } from "react-native";
import logo from "../../assets/images/lms.png";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("SelectSchool");
    }, 3000);
  });
  return (
    <SafeAreaView className="bg-white flex-1 justify-center items-center">
      <Image source={logo} />
      <ActivityIndicator size="small" color="#FF8300" />
    </SafeAreaView>
  );
};
