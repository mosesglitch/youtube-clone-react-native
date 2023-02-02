import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
// import Icon from "react-native-ionicons";
import Icon from "react-native-vector-icons/FontAwesome";
const SearchVideo = () => {
  const [text, onChangeText] = React.useState("");
  const [color, setColor] = React.useState({ backgroundColor: "green" });
  const onSubmitSearch = () => {
    console.log("search text", text);
  };
  const onFocus = () => {
    setColor({
      backgroundColor: "green",
    });
  };
  console.log(text);
  return (
    <SafeAreaView style={{ paddingTop: 50 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <View
          style={{
            flex: 2,
          }}
        >
          <Text
            style={{
              height: 35,
              backgroundColor: "blue",
            }}
          >
            YoutubeClone
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: 40,
            borderWidth: 1,
            marginHorizontal: 10,
            borderRadius: 10,
            // borderColor: "white",
          }}
        >
          <View style={{ flex: 3 }}>
            <TextInput
              placeholder="Search Video"
              style={{
                borderColor: "blue",
                height: 34,
                paddingLeft: 20,
              }}
              onFocus={() => onFocus()}
              onChangeText={onChangeText}
              value={text}
            />
          </View>

          <View
            style={{
              flex: 1,
              flexWrap: "wrap",
              backgroundColor: "#707B7C",
              borderRadius: 10,
              height: 40,
              alignContent: "center",
              justifyContent: "center",
              borderColor: "#515A5A",
              borderWidth: 1,
            }}
          >
            <Icon
              style={{
                alignSelf: "flex-end",
              }}
              name="search"
              size={23}
              color="black"
              onPress={() => {
                Alert.alert("Music Icon Clicked");
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  submitButtonText: {},
});
export default SearchVideo;
