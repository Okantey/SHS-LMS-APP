import React, { useState, useRef, useContext } from "react";
import { View, Text, Pressable, LayoutAnimation } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../context/AuthContext";
import { EvilIcons } from "@expo/vector-icons";

export default Accordion = ({ title }) => {
  const { user } = useContext(AuthContext);
  const firstName = user.user_info.first_name;
  const lastName = user.user_info.last_name;
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef();

  const toggleContent = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowContent(!showContent);
  };

  return (
    <Pressable onPress={toggleContent} className="my-2">
      <View
        style={{
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Ionicons
          name={showContent ? "chevron-down" : "chevron-forward"}
          size={35}
          color="black"
        />
        <Text style={{ fontFamily: "lato-bold", fontSize: 18 }}>{title}</Text>
      </View>
      <View
        style={{ display: showContent ? "flex" : "none", overflow: "hidden" }}
        className={`${showContent ? "flex flex-row items-center" : null} `}
      >
        <View>
          <EvilIcons name="user" size={70} color="black" className="relative" />
          <View className="w-4 h-4 rounded-full bg-green-600 border-green-600 absolute bottom-0 right-2"></View>
        </View>
        <Text
          className="transition-all text-2xl"
          style={{ fontFamily: "lato-bold" }}
          ref={contentRef}
        >
          {firstName} {lastName}
        </Text>
      </View>
    </Pressable>
  );
};
