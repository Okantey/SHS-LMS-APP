import { Text, View, ActivityIndicator, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../global.styles";
import Axios from "../../api/Axios";
export default SubjectParticipants = () => {
  const PARTICIPANTS_URL =
    "/lms/registered_subjects/participants/?subject_name=";
  const { token, subject } = useContext(AuthContext);
  const [participants, setParticipants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleParticipantsFetch = async () => {
    setIsLoading(true);
    try {
      const response = await Axios.get(`${PARTICIPANTS_URL}${subject}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      const loadedDetails = await response.data.data;
      console.log(loadedDetails);
      setParticipants(loadedDetails);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    handleParticipantsFetch();
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white px-4 -mt-6">
      {isLoading ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size={30} color={colors.blue} />
          <Text
            style={{
              fontSize: 16,
              fontFamily: "lato-bold",
              color: colors.blue,
            }}
          >
            Loading...
          </Text>
        </View>
      ) : (
        participants.map((user) => {
          return (
            <TouchableOpacity
              key={user.participant_id}
              className="flex flex-row items-center my-1"
            >
              <MaterialIcons name="account-circle" size={50} color="black" />
              <View>
                <Text style={{ fontFamily: "lato-bold", fontSize: 18 }}>
                  {user.participant_name}
                </Text>
                <Text style={{ fontFamily: "lato-regular" }}>
                  {user.participant_email}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })
      )}
    </SafeAreaView>
  );
};
