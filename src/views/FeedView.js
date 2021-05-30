//Core imports
import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
//Dependencies imports
//Assets imports
//Components imports
import FeedList from '../components/FeedComponent';

function Feed() {

  return (
    <ScrollView>
      <FeedList />
    </ScrollView>
  );
}

// const styles = StyleSheet.create({
//     text: {
//         fontFamily: "sanz",
//     }
// })

export default Feed;
