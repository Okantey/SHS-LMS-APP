import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BackButton } from "../../components";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Axios from "../../api/Axios";
import { AuthContext } from "../../context/AuthContext";

export default ChatScreen = ({ navigation, route }) => {
  const { token } = useContext(AuthContext);
  const { first, last } = route.params;
  const time = new Date().toLocaleString();
  console.log(time);
  const postChatURL = "/lms/personal_chats/";
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);

  const handleMessageSubmit = async () => {
    const newMessage = {
      chat_id: uuidv4(),
      timestamp: time,
      content: message,
    };

    try {
      const response = await Axios.post(postChatURL, newMessage, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      if (response.status === 200) {
        const retrievedChat = await response.data.data;
        setChats([...chats, retrievedChat]);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white px-2 flex justify-between">
      <View>
        <View className="w-full flex flex-row items-center">
          <BackButton onPress={() => navigation.goBack()} />
          <Text style={{ fontFamily: "lato-bold", fontSize: 22 }}>
            {first} {last} - Personal Space
          </Text>
        </View>
        <View className="flex flex-1 justify-end">
          {chats &&
            chats.map((chat) => {
              return (
                <View key={chat.id} className="flex flex-row items-baseline">
                  <Text>{chat.message}</Text>
                  <Text>{chat.time}</Text>
                </View>
              );
            })}
        </View>
      </View>
      <View className="w-full flex flex-row items-center">
        <TextInput
          placeholder="Type a message..."
          className="flex-1 bg-smoke py-4 px-4 rounded-full my-2 text-lg"
          onChangeText={(text) => setMessage(text)}
          value={message}
        />
        <View className="p-2 bg-blue rounded-full ml-2">
          <MaterialCommunityIcons
            name="send-circle"
            size={36}
            color="white"
            role="button"
            onPress={handleMessageSubmit}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
