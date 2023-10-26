import { SafeAreaView } from "react-native-safe-area-context";
import { Image, ActivityIndicator, Text } from "react-native";
import logo from "../../assets/images/new-lms.png";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../global.styles";

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
      <Text style={styles.headerText} className="my-2 mb-6">
        SHS LMS APP
      </Text>
      <ActivityIndicator size="small" color="#FF8300" />
    </SafeAreaView>
  );
};
