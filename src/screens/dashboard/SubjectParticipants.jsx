import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackButton } from "../../components";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { AntDesign } from "@expo/vector-icons";
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
      console.log(loadedDetails);
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
    <SafeAreaView className="flex-1 bg-white px-4">
      {isLoading ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size={30} color={colors.blue} />
          <Text style={{ fontSize: 16, fontFamily: "lato-bold" }}>
            Loading...
          </Text>
        </View>
      ) : (
        participants.map((user) => {
          return (
            <View
              key={user.participant_id}
              className="flex flex-row items-center"
            >
              <AntDesign name="user" size={30} color="black" />
              <View>
                <Text>{user.participant_name}</Text>
                <Text>{user.participant_email}</Text>
              </View>
            </View>
          );
        })
      )}
    </SafeAreaView>
  );
};
