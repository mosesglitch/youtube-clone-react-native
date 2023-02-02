import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SearchVideo from "./app/screens/SearchVideo";
import VideoWatch from "./app/screens/VideoWatch";
import SearchResults from "./app/screens/youtubeAPI";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SearchVideo />
      {/* <SearchResults /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
