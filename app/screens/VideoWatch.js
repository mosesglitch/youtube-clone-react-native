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

const VideoWatch = () => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="show modal with video"
        onPress={() => setModalVisible(true)}
      />
      <Modal
        transparent
        visible={modalVisible}
        onDismiss={() => setModalVisible(false)}
        onRequestClose={() => setModalVisible(false)}
        animationType={"slide"}
      >
        <View style={styles.container}>
          <View style={styles.modalContainer}>
            <Text>This is a player in a modal</Text>
            <YoutubePlayer play={true} height={200} videoId={"AVAc1gYLZK0"} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    // justifyContent: "center",
    // alignItems: "center",
  },
  modalContainer: {
    padding: 40,
    backgroundColor: "grey",
    width: "100%", // IMPORTANT if modal container has alignItems: 'center'
  },
});

export default VideoWatch;
