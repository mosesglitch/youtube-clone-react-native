import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Button,
  StyleSheet,
  Modal,
  Text,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const VideoWatch = ({ videoList, selectedVideoId }) => {
  const [vidid, setvidid] = useState("U6JBZNAkp24");

  console.log(videoList, selectedVideoId);
  // const [modalVisible, setModalVisible] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      {/* <Button
        title="show modal with video"
        onPress={() => setModalVisible(true)}
      /> */}
      {/* <Modal
        transparent
        visible={modalVisible}
        onDismiss={() => setModalVisible(false)}
        onRequestClose={() => setModalVisible(false)}
        animationType={"slide"}
      > */}
      <View style={{ margin: 10 }}>
        <View style={styles.modalContainer}>
          {/* <Text>This is a player in a modal</Text> */}
          <YoutubePlayer play={true} height={500} videoId={vidid} />
        </View>
        <View>
          <Text>{selectedVideoId.snippet.title}</Text>
        </View>
        <View>{videoList}</View>
      </View>
      {/* </Modal> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    // alignItems: "center",
  },
  modalContainer: {
    // backgroundColor: "grey",
    // IMPORTANT if modal container has alignItems: 'center'
  },
});

export default VideoWatch;
