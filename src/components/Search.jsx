import { TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, styles } from "../global.styles";

export default Search = ({ search, setSearch }) => {
  return (
    <View className="w-full flex flex-row my-4">
      <View className="w-full flex-1 flex-row items-center bg-smoke p-3 mr-4 rounded-xl">
        <Ionicons name="search-outline" size={30} color="black" />
        <TextInput
          keyboardType="default"
          className="w-full mx-2 text-lg"
          placeholder="Find your subjects here..."
          style={styles.basic}
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
      </View>
      <Ionicons name="filter" size={44} color={colors.blue} />
    </View>
  );
};
