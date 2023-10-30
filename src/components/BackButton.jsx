import { Ionicons } from "@expo/vector-icons";

export default BackButton = ({ onPress }) => {
  return (
    <Ionicons onPress={onPress} name="chevron-back" size={40} color="black" />
  );
};
