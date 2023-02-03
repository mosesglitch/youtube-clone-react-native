import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import VideoWatch from "./VideoWatch";

function SearchResults(props) {
  const query = props.searchTerm;
  const [posts, setPosts] = useState([]);
  const [videoList, setVideoList] = useState([]);
  const [selectedVideoId, setVideoId] = useState({});
  const [isSelected, setSelected] = useState(false);
  const API_KEY = "AIzaSyBM-uSvj__c0uTgzrw_WI31EjGZMKZvyws";

  const fetchVidId = (e) => {
    setVideoId(e);
    console.log(e);
  };
  const watchVid = (video) => {
    fetchVidId(video);
    setSelected(true);
  };

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
          onPress={() => watchVid(video)}
        >
          <View
            style={{
              marginHorizontal: 20,
              marginVertical: 10,
              flexDirection: "row",
            }}
          >
            <View style={{ marginRight: 15 }}>
              <Image
                style={{ width: 120, height: 90 }}
                source={{
                  uri: video.snippet.thumbnails.default.url,
                }}
              />
            </View>
            <View>
              <Text style={styles.name}>{video.snippet.title}</Text>
              <Text style={styles.channel}>{video.snippet.channelTitle}</Text>
              <Text
                numberOfLines={3}
                ellipsizeMode="tail"
                style={styles.description}
              >
                {video.snippet.description}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      );

      // console.log(video.snippet.channelTitle);
    });
    setVideoList(youtubeList);
  }, [posts]);

  if ((posts > 0) & (isSelected == true)) {
    console.log("condition met");
    return (
      <View>
        <VideoWatch videoList={videoList} selectedVideoId={selectedVideoId} />
      </View>
    );
  } else if (posts > 0) {
    console.log("condition not met");
    console.log("selected", isSelected);
    console.log(posts.length);
    return <View>{videoList}</View>;
  }
  console.log("selected", isSelected);
  return <Text>Hallos</Text>;
}

// const fetchData=()=>{

// }
const styles = StyleSheet.create({
  name: {
    fontWeight: "bold",
  },
  details: {
    fontWeight: "20px",
    color: "#566573",
  },
  description: {
    paddingTop: 10,
  },
});
export default SearchResults;
