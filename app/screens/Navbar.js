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
const interests = [
  "react",
  "computers",
  "python",
  "evolution",
  "economy",
  "react-native",
  "hiphop",
];
const SearchVideo = ({ FetchSearchTerm }) => {
  const [text, onChangeText] = React.useState("");
  const [color, setColor] = React.useState({ backgroundColor: "green" });

  const onFocus = () => {
    setColor({
      backgroundColor: "green",
    });
  };
  const interestList = interests.map((interest) => {
    return (
      <View
        style={{
          backgroundColor: "#EAECEE",
          padding: 10,
          margin: 10,
          borderRadius: 15,
          borderWidth: 2,
          borderColor: "#D5D8DC",
        }}
      >
        <TouchableOpacity>
          <Text>{interest}</Text>
        </TouchableOpacity>
      </View>
    );
  });
  return (
    <SafeAreaView style={{ paddingTop: 50 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          // flexWrap: "wrap",
          marginHorizontal: 15,
          backgroundColor: "white",
          paddingBottom: 20,
          borderBottomColor: "#EAECEE",
          borderBottomWidth: 1,
        }}
      >
        <View
          style={{
            flex: 2,
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Icon
            style={{
              alignSelf: "flex-end",
              paddingRight: 15,
            }}
            name="youtube"
            size={35}
            color="red"
            onPress={() => {
              Alert.alert("Music Icon Clicked");
            }}
          />
          <Text
            style={{
              height: 35,

              // fontFamily: "Cursive",
              fontWeight: "bold",
              fontSize: 30,
            }}
          >
            MGW Tube
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
              size={18}
              color="black"
              onPress={() => {
                FetchSearchTerm(text);
                Alert.alert("Music Icon Clicked");
              }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          // flexWrap: "wrap",
          marginHorizontal: 15,
          backgroundColor: "white",
          padding: 10,
          borderBottomColor: "#EAECEE",
          borderBottomWidth: 1,
        }}
      >
        {interestList}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  submitButtonText: {},
});
export default SearchVideo;
