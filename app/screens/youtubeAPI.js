import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import VideoWatch from "./VideoWatch";

function SearchResults(props) {
  const query = props.searchTerm;
  const [posts, setPosts] = useState([]);
  const [videoList, setVideoList] = useState([]);
  const [selectedVideoId, setVideoId] = useState();
  const API_KEY = "AIzaSyBM-uSvj__c0uTgzrw_WI31EjGZMKZvyws";

  const fetchVidId = (e) => {
    setVideoId(e);
  };
  console.log("holla", selectedVideoId);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "20",
        key: API_KEY,
        q: query,
      },
    })
      .then((res) => {
        setPosts(res.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query]);

  useEffect(() => {
    const youtubeList = posts.map((video) => {
      return (
        <TouchableWithoutFeedback
          id={video.snippet.id}
          style={styles.list}
          key={video.snippet.id}
          data={video.snippet.id}
          onPress={() => fetchVidId(video.id.videoId)}
        >
          <View>
            <Text style={styles.name}>{video.snippet.title}</Text>
            <Text style={styles.details}>{video.snippet.channelTitle}</Text>
          </View>
        </TouchableWithoutFeedback>
      );

      console.log(video.snippet.title);
      // console.log(video.snippet.channelTitle);
    });
    setVideoList(youtubeList);
  }, [posts]);
  if (posts.length > 0 && selectedVideoId) {
    return (
      <View>
        <VideoWatch />
        {videoList}
      </View>
    );
  } else if (posts.length > 0) {
    return <View>{videoList}</View>;
  }
  return <Text>Hallos</Text>;
}

// const fetchData=()=>{

// }
const styles = StyleSheet.create({
  list: {
    padding: 20,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
  },
  details: {
    fontWeight: "20px",
  },
});
export default SearchResults;
