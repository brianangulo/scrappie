//Core
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
//Url previewer
import RNUrlPreview from 'react-native-url-preview';
//Axios for https
import axios from 'axios';
//Importing apikey
import { API_KEY } from '../../keys';

function FeedList() {
  //state
  const [url, setUrl] = useState([]);

  //Fetching info
  const fetchLinks = () => {
    const options = {
      method: 'GET',
      url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/ne/news',
      headers: {
        'x-rapidapi-key': API_KEY,
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
