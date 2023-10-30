import { ActivityIndicator, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState, useEffect } from "react";
import Axios from "../../api/Axios";
import { colors, styles } from "../../global.styles";
export default SubjectDetails = ({ navigation }) => {
  const DETAILS_URL = "lms/registered_subjects/?subject_name=";
  const [subjectDetails, setSubjectDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { subject, token } = useContext(AuthContext);
  console.log(subject);

  const handleDetailsFetch = async () => {
    setIsLoading(true);
    try {
      const response = await Axios.get(`${DETAILS_URL}${subject}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      const loadedDetails = await response.data.data.subject_description;
      console.log(loadedDetails);
      setSubjectDetails(loadedDetails);
      console.log(loadedDetails);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    handleDetailsFetch();
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
        <ScrollView
          className="flex-1 -mt-8"
          showsVerticalScrollIndicator={false}
        >
          <Text
            style={{ fontFamily: "lato-bold" }}
            className="text-3xl text-blue"
          >
            Course Details
          </Text>
          <Text
            style={{ textAlign: "justify", fontFamily: "lato-bold" }}
            className="text-lg"
          >
            {subjectDetails}
          </Text>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
