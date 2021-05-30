//Core
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView, FlatList} from 'react-native';
//importing some dependencies
import { ListItem } from "react-native-elements";
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
        setUrl(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  //Fetching the information on mount with useeffect hook
  useEffect(() => {
    fetchLinks();
  }, []);

  //Extracting keys in order to use with the Flatlist RN component
  const keyExtractor = (item, index) => {
    return index.toString();
  };
  //A render item function that will be provided to FLatList comp. it uses listitem from RNE
  const renderItem = ({item}) => {
    return (
      <ListItem bottomDivider>
        <ListItem.Content>
          <RNUrlPreview text={item.link} />
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    );
  };

  return (
    <FlatList 
      keyExtractor={keyExtractor}
      data={url}
      renderItem={renderItem}
    />
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
