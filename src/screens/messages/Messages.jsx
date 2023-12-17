import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Image } from "react-native";
import { Accordion, Button } from "../../components";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { StatusBar } from "expo-status-bar";

export default Messages = ({ navigation }) => {
  const { user } = useContext(AuthContext);
  const firstName = user.user_info.first_name;
  const lastName = user.user_info.last_name;
  return (
    <SafeAreaView className="flex-1 px-4 bg-white">
      <StatusBar style="auto" />
      <View className="flex flex-row justify-between items-center mb-4">
        <Text style={{ fontFamily: "lato-bold", fontSize: 25 }}>Messages</Text>
        <Image
          source={{
            uri: "https://img.freepik.com/free-photo/happy-african-american-young-man-colorful-shirt-wearing-glasses-looking-camera-smiling-cheerfully_141793-108881.jpg?w=740&t=st=1698417032~exp=1698417632~hmac=7b862e2fcf31027441c2e466fb8ed89a9c308517ed66afa5f67bdf137f6f7850",
          }}
          className="w-10 h-10 object-contain rounded-full"
        />
      </View>
      <View>
        <Accordion
          title="Starred (1)"
          content="This is just a test case for the accordion"
        />
        <Accordion
          title="Private (0)"
          content="This is just a test case for the accordion"
        />
      </View>
      <View className="my-4">
        <Button
          name="Enter Personal Space"
          onPress={() =>
            navigation.navigate("ChatScreen", {
              first: firstName,
              last: lastName,
            })
          }
        />
      </View>
    </SafeAreaView>
  );
};
