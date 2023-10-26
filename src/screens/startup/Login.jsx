import React, { useEffect, useState } from "react";
import { Text, View, TextInput, ScrollView, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../components";
import { styles } from "../../global.styles";
import logo from "../../../assets/images/new-lms.png";

export default Login = ({ navigation, route }) => {
  const { id } = route.params;
  console.log(id);
  const [schoolID, setSchoolID] = useState("");
  const [studentID, setStudentID] = useState("");
  const [pin, setPin] = useState("");

  useEffect(() => {
    setSchoolID(id);
  }, []);
  return (
    <SafeAreaView className="bg-white pt-6 flex-1 flex px-4">
      <View className="flex flex-row justify-center items-center">
        <Image source={logo} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View className="w-full mb-4">
            <Text style={styles.basic} className="text-lg mt-2">
              School ID
            </Text>
            <TextInput
              className="border border-gray w-full p-4 rounded-lg my-2 text-base shadow bg-gray-200"
              style={styles.basic}
              value={`${schoolID}`}
              inputMode="numeric"
              editable={false}
              placeholder={`${schoolID}`}
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
          <View className="my-3 flex flex-row items-center justify-center gap-1 py-10">
            <Text
              style={{ fontFamily: "lato-bold" }}
              className="text-black text-center text-lg "
            >
              Don't have an account?
            </Text>
            <Text
              style={{ fontFamily: "lato-bold" }}
              className="underline text-orange text-lg"
              onPress={() => navigation.navigate("Welcome")}
            >
              Create one here
            </Text>
          </View>
        </View>
        <StatusBar style="dark" />
      </ScrollView>
    </SafeAreaView>
  );
};
