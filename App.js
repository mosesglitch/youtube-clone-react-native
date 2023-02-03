import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SearchVideo from "./app/screens/Navbar";
import VideoWatch from "./app/screens/VideoWatch";
import SearchResults from "./app/screens/youtubeAPI";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const FetchSearchTerm = (searchTerm) => {
    setSearchTerm(searchTerm);
    return;
  };
  console.log(searchTerm);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SearchVideo FetchSearchTerm={FetchSearchTerm} />
      <SearchResults searchTerm={searchTerm} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
