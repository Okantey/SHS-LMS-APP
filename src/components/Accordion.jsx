import React, { useState, useRef } from "react";
import { View, Text, Pressable, LayoutAnimation } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default Accordion = ({ title, content }) => {
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
        className="transition-all"
      >
        <Text className="transition-all" ref={contentRef}>
          {content}
        </Text>
      </View>
    </Pressable>
  );
};
