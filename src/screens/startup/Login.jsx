import React, { useEffect, useState } from "react";
import { Text, View, TextInput, ScrollView, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../components";
import { styles } from "../../global.styles";
import logo from "../../../assets/images/new-lms.png";

export default Login = ({ navigation, route }) => {
  const { name, id } = route.params;
  console.log(name);
  const [studentID, setStudentID] = useState("");
  const [pin, setPin] = useState("");
  let baseURL = "https://kwesistigar.pythonanywhere.com";
  return (
    <SafeAreaView className="bg-white pt-6 flex-1 flex px-4">
      <View className="flex flex-row justify-center items-center">
        <Image source={logo} className="w-20 h-24" />
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
            />
            <Text style={styles.basic} className="text-lg">
              Pin
            </Text>
            <TextInput
              placeholder="Enter student pin"
              className="border border-gray w-full p-4 rounded-lg my-2 text-base shadow"
              keyboardType="numeric"
              style={styles.basic}
            />
          </View>
          <Button
            name="LOGIN"
            onPress={() => navigation.navigate("VerifyLogin")}
          />
        </View>
        <StatusBar style="dark" />
      </ScrollView>
    </SafeAreaView>
  );
};
