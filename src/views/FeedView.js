//Core imports
import React from 'react';
import {StyleSheet, ScrollView, SafeAreaView} from 'react-native';
//Dependencies imports
//Assets imports
//Components imports
import FeedList from '../components/FeedComponent';

function Feed() {

  return (
    <SafeAreaView>
      <FeedList />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//     text: {
//         fontFamily: "sanz",
//     }
// })

export default Feed;
