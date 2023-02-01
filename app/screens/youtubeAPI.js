import React, { useEffect, useState } from "react";
import axios from "axios";
import { Text } from "react-native";

function SearchResults(props) {
  const query = "black hawk";
  const [posts, setPosts] = useState([]);
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
  }, [query]);
  useEffect(() => {
    if (posts.length > 0) {
      console.log("posts trial", posts[2].id.videoId);

      console.log("posts trial", posts[2].snippet.title);
    }
  }, [posts]);
  return <Text>Hallo</Text>;
}

export default SearchResults;
