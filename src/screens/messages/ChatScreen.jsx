import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BackButton, ChatTime } from "../../components";
import { useContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import Axios from "../../api/Axios";
import "react-native-get-random-values";
import { colors } from "../../global.styles";
import { AuthContext } from "../../context/AuthContext";
import { StatusBar } from "expo-status-bar";

export default ChatScreen = ({ navigation, route }) => {
  const { token } = useContext(AuthContext);
  const { first, last } = route.params;
  let dateTime = new Date().toISOString();
  const postChatURL = "/lms/personal_chats/";
  const getChatURL = "/lms/personal_chats/";
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleMessagesFetch = async () => {
    setIsLoading(true);
    try {
      const response = await Axios.get(getChatURL, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      const fetchedChats = await response.data.data;
      setChats(fetchedChats);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    handleMessagesFetch();
  }, []);

  const handleMessageSubmit = async () => {
    const newMessage = {
      content: message,
      chat_id: uuid(),
      timestamp: dateTime,
    };

    try {
      const response = await Axios.post(
        postChatURL,
        {
          content: newMessage.content,
          chat_id: newMessage.chat_id,
          timestamp: newMessage.timestamp,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      if (response.status === 200) {
        const retrievedChat = await response.data;
        console.log(retrievedChat);
        setChats([...chats, retrievedChat]);
        setMessage("");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white px-2 flex justify-between">
      <StatusBar backgroundColor="black" style="light" />
      <View>
        <View className="w-full flex flex-row items-center">
          <BackButton onPress={() => navigation.goBack()} />
          <Text style={{ fontFamily: "lato-bold", fontSize: 20 }}>
            {first} - Personal Space
          </Text>
        </View>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: "#fff",
        }}
      >
        {isLoading ? (
          <View className="flex-1 justify-center items-center">
            <ActivityIndicator size={30} color={colors.blue} />
            <Text style={{ fontSize: 16, fontFamily: "lato-bold" }}>
              Loading...
            </Text>
          </View>
        ) : (
          chats.map((chat) => {
            return (
              <View
                key={chat.chat_id}
                className="flex flex-row justify-end items-baseline my-2"
              >
                <View className="bg-blue shadow-sm shadow-blue p-4 rounded-3xl flex flex-row items-end">
                  <Text
                    className="text-white"
                    style={{ fontFamily: "lato-bold" }}
                  >
                    {chat.content}
                  </Text>
                  <ChatTime timestamp={chat.timestamp} />
                </View>
              </View>
            );
          })
        )}
      </ScrollView>
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
