//Core imports
import React, { useEffect } from 'react';
import {SafeAreaView} from 'react-native';
//Redux
import {useSelector, useDispatch} from 'react-redux';
import { setUrl, setSavedUrls } from "../redux/rootSlice";
//Components imports
import FeedList from '../components/FeedComponent';
//Api key
import {API_KEY} from '../../keys';
//Axios
import axios from 'axios';

function Feed() {
  //state + redux hooks
  const url = useSelector((state) => state.root.url)
  const savedUrls = useSelector((state) => state.root.savedUrls);
  const dispatch = useDispatch();

  //handlers
  const handleSaveUrl = (url) => {
    dispatch(setSavedUrls(url));
  };

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
       dispatch(setUrl(response.data)); 
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  //Fetching the information on mount with useeffect hook
  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <SafeAreaView>
      <FeedList url={url} handleSaveUrl={handleSaveUrl} />
    </SafeAreaView>
  );
}

export default Feed;
