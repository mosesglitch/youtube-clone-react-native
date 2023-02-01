import React, { useEffect, useState } from "react";
import axios from "axios";
import { Text, View } from "react-native";

function SearchResults(props) {
  const query = "black";
  const [posts, setPosts] = useState([]);
  const [videoList, setVideoList] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "20",
        key: "AIzaSyBKs7Pp-_Zyfe1PqEqK5DKM_dZrCutHLmA",
        q: query,
      },
    })
      .then((res) => {
        setPosts(res.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [posts]);

  useEffect(() => {
    if (posts.length > 0) {
      const youtubeList = posts.map((video) => {
        <View key={video.snippet.id}>
          <Text>{video.snippet.title}</Text>
          <Text>{video.snippet.channelTitle}</Text>
        </View>;
        console.log(video.snippet.title);
        // console.log(video.snippet.channelTitle);
      });
      setVideoList(youtubeList);
    }
  }, [posts]);
  if (videoList > 0) {
    return <Text>Hallos How are you</Text>;
    // { videoList };
  }
  return <Text>Hallos</Text>;
}

export default SearchResults;
