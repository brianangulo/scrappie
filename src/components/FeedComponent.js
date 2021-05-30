import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import RNUrlPreview from 'react-native-url-preview';
import axios from 'axios';

function FeedList() {
  //state
  const [url, setUrl] = useState([]);

  //Fetching info
  const fetchLinks = () => {
    const options = {
      method: 'GET',
      url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/ne/news',
      headers: {
        'x-rapidapi-key': '3e6a3760ffmshbed4443fa9471ddp1f2d63jsnebf729650a08',
        'x-rapidapi-host': 'yahoo-finance15.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setUrl(response.data);
        console.log(url);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <>
      {url.map((obj, index) => {
        return (
          <RNUrlPreview style={styles.container} text={obj.link} key={index} />
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FeedList;
