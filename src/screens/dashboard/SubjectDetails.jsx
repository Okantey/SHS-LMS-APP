import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackButton } from "../../components";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
export default SubjectDetails = ({ navigation }) => {
  const { subject } = useContext(AuthContext);
  console.log(subject);
  return <SafeAreaView className="flex-1 bg-white px-4"></SafeAreaView>;
};
