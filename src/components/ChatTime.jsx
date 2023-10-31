import { Text } from "react-native";

export default ChatTime = ({ timestamp }) => {
  const isoDate = new Date(timestamp);
  const localTimeString = isoDate.toLocaleTimeString();

  return (
    <Text
      style={{ fontFamily: "lato-regular", fontSize: 10, marginLeft: 8 }}
      className="text-gray-600"
    >
      {localTimeString}
    </Text>
  );
};
