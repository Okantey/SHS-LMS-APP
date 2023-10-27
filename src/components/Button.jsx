import React from "react";
import { Pressable, Text } from "react-native";

export default Button = ({ name, onPress }) => {
  return (
    <Pressable
      className="w-full bg-blue p-3 rounded-md shadow-md flex flex-row justify-center items-center"
      onPress={onPress}
    >
      <Text
        style={{ fontFamily: "lato-bold" }}
        className={`text-center  text-white text-xl `}
      >
        {name}
      </Text>
    </Pressable>
  );
};
