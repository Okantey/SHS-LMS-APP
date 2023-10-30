import React, { useState, useRef } from "react";
import { View, Text, Pressable, LayoutAnimation } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Accordion = ({ title, content }) => {
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef();

  const toggleContent = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setShowContent(!showContent);
  };

  return (
    <Pressable onPress={toggleContent}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontFamily: "lato-bold", fontSize: 22 }}>{title}</Text>
        <MaterialIcons
          name={showContent ? "arrow-drop-up" : "arrow-drop-down"}
          size={40}
          color="black"
        />
      </View>
      <View
        style={{ display: showContent ? "flex" : "none", overflow: "hidden" }}
        className="transition-all"
      >
        <Text ref={contentRef}>{content}</Text>
      </View>
    </Pressable>
  );
};

export default Accordion;
