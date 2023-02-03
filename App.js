import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SearchVideo from "./app/screens/Navbar";
import VideoWatch from "./app/screens/VideoWatch";
import SearchResults from "./app/screens/searchResults";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const FetchSearchTerm = (searchTerm) => {
    setSearchTerm(searchTerm);
    return;
  };
  console.log(searchTerm);
  return (
    <View style={{ flex: 1 }}>
      {/* <StatusBar /> */}
      <View style={{ flex: 1 }}>
        <SearchVideo FetchSearchTerm={FetchSearchTerm} />
      </View>
      <View style={{ flex: 4, justifyContent: "center" }}>
        <View>
          <SearchResults searchTerm={searchTerm} />
        </View>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create();
