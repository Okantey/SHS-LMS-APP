import { SafeAreaView } from "react-native-safe-area-context";
import { Image, ActivityIndicator, Text } from "react-native";
import { useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../global.styles";
import { StatusBar } from "expo-status-bar";

export default SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("SelectRole");
    }, 2000);
  });
  return (
    <SafeAreaView className="bg-white flex-1 justify-center items-center">
      <StatusBar backgroundColor="black" style="light" />
      <Image
        source={{
          uri: "https://img.freepik.com/premium-vector/flat-web-template-with-lms-concept-design-concept-learning-management-system_100456-8728.jpg?size=626&ext=jpg&ga=GA1.1.941783686.1692185846&semt=ais",
        }}
        className="w-52 h-52 object-cover"
      />
      {/* <Text style={styles.headerText} className="mb-4">
        SHS LMS APP
      </Text> */}
      <ActivityIndicator size="small" color="#0492c2" />
    </SafeAreaView>
  );
};
