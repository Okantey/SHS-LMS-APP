import React, { useState, useContext } from "react";
import {
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../components";
import { styles } from "../../global.styles";
import Axios from "../../api/Axios";
import { AuthContext } from "../../context/AuthContext";

export default Login = ({ navigation, route }) => {
  const { name, schoolID } = route.params;
  const [studentID, setStudentID] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const loginURL = "/auth/login/student";
  const { setUser, setToken } = useContext(AuthContext);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await Axios.post(loginURL, {
        school_id: schoolID,
        student_id: studentID,
        pin: pin,
      });
      if (response.status === 200) {
        const loadedUser = response.data.data;
        const token = response.data.token;
        setUser(loadedUser);
        setToken(token);
        navigation.navigate("Tabs");
      }
    } catch (err) {
      err && setError(err.message);
      console.log(error);
      Alert.alert("Response", error, [
        {
          text: "OK",
          onPress: () => console.log("ok"),
        },
        {
          text: "Cancel",
          onPress: () => console.log("cancel"),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <SafeAreaView className="bg-white pt-6 flex-1 flex px-4">
      <View className="flex flex-row justify-center items-center">
        <Image
          source={{
            uri: "https://img.freepik.com/premium-vector/flat-web-template-with-lms-concept-design-concept-learning-management-system_100456-8728.jpg?size=626&ext=jpg&ga=GA1.1.941783686.1692185846&semt=ais",
          }}
          className="w-32 h-28"
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View className="w-full mb-4">
            <Text style={styles.basic} className="text-lg mt-2">
              School name
            </Text>
            <TextInput
              className="border border-gray w-full p-4 rounded-lg my-2 text-base shadow bg-gray-200"
              style={styles.basic}
              value={`${name}`}
              inputMode="numeric"
              editable={false}
            />
            <Text style={styles.basic} className="text-lg mt-2">
              Student ID
            </Text>
            <TextInput
              placeholder="Enter student id"
              className="border border-gray w-full p-4 rounded-lg my-2 text-base shadow"
              keyboardType="numeric"
              style={styles.basic}
              value={studentID}
              onChangeText={(text) => setStudentID(text)}
            />
            <Text style={styles.basic} className="text-lg">
              Pin
            </Text>
            <TextInput
              placeholder="Enter student pin"
              className="border border-gray w-full p-4 rounded-lg my-2 text-base shadow"
              keyboardType="numeric"
              style={styles.basic}
              value={pin}
              onChangeText={(text) => setPin(text)}
            />
          </View>
          <Button
            name={
              isLoading ? (
                <ActivityIndicator color="white" size="small" />
              ) : (
                "LOGIN"
              )
            }
            role="submit"
            onPress={handleSubmit}
          />
        </View>
        <StatusBar style="dark" />
      </ScrollView>
    </SafeAreaView>
  );
};
