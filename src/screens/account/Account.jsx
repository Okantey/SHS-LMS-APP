import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../global.styles";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import martin from "../../../assets/martin.jpg";

export default Account = () => {
  const navigation = useNavigation();
  const { user, setToken } = useContext(AuthContext);
  const email = user.user_info.email;
  const firstName = user.user_info.first_name;
  const lastName = user.user_info.last_name;
  const accountLinks = [
    {
      id: 1,
      name: "Language",
      iconOne: <Ionicons name="language" size={30} color="gray" />,
      iconTwo: (
        <Ionicons name="arrow-forward-circle-outline" size={30} color="gray" />
      ),
    },

    {
      id: 2,
      name: "Notifications",
      iconOne: <Ionicons name="notifications-outline" size={30} color="gray" />,
      iconTwo: (
        <Ionicons name="arrow-forward-circle-outline" size={30} color="gray" />
      ),
    },

    {
      id: 3,
      name: "Terms and Privacy Policy",
      iconOne: <Ionicons name="newspaper-outline" size={30} color="gray" />,
      iconTwo: (
        <Ionicons name="arrow-forward-circle-outline" size={30} color="gray" />
      ),
    },

    {
      id: 4,
      name: "Get Help",
      iconOne: <Ionicons name="chatbubbles-outline" size={30} color="gray" />,
      iconTwo: (
        <Ionicons name="arrow-forward-circle-outline" size={30} color="gray" />
      ),
    },

    {
      id: 5,
      name: "Software Licenses",
      iconOne: (
        <Ionicons
          name="ios-information-circle-outline"
          size={30}
          color="gray"
        />
      ),
      iconTwo: (
        <Ionicons name="arrow-forward-circle-outline" size={30} color="gray" />
      ),
    },
    {
      id: 6,
      name: "Logout",
      iconOne: <MaterialIcons name="logout" size={30} color="gray" />,
      iconTwo: (
        <Ionicons name="arrow-forward-circle-outline" size={30} color="gray" />
      ),
      purpose: () => {
        setToken("");
        navigation.navigate("SelectRole");
      },
    },
  ];
  return (
    <SafeAreaView className="flex-1 px-4 pt-8  bg-white">
      <StatusBar backgroundColor="black" style="light" />
      <View className="border border-blue p-6 rounded-lg relative">
        <View className="absolute top-[-30%] left-5">
          <Image
            source={martin}
            className="w-12 h-12 object-contain rounded-full"
          />
        </View>
        <View className="mt-4 flex-row items-center justify-between">
          <View>
            <Text style={{ fontFamily: "lato-bold" }} className="text-xl">
              {firstName} {lastName}
            </Text>
            <Text style={{ fontFamily: "lato-regular" }} className="text-lg">
              {email}
            </Text>
            <Text style={{ fontFamily: "lato-regular" }} className="text-lg">
              +233 50 669 8372
            </Text>
          </View>
          <View className="border border-gray-400 px-4 py-1 rounded-xl flex justify-center items-center">
            <AntDesign name="edit" size={30} color="gray" />
            <Text style={{ fontFamily: "lato-bold" }} className="text-lg">
              Edit
            </Text>
          </View>
        </View>
      </View>
      {/*  */}
      <View className="my-6 px-4">
        {accountLinks.map((link) => {
          return (
            <TouchableOpacity
              key={link.id}
              className="flex-row justify-between items-center py-4"
              onPress={link.purpose}
            >
              <View className="flex-row items-center">
                <View className="mr-6">{link.iconOne}</View>
                <Text
                  style={{ fontFamily: "lato-bold" }}
                  className="text-xl text-gray-600"
                >
                  {link.name}
                </Text>
              </View>
              <View>{link.iconTwo}</View>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};
