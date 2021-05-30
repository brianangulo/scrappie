//Core imports
import React from 'react';
import {StyleSheet, ScrollView, View, List, FlatList} from 'react-native';
//Dependencies imports
import {Card, Button, Text, ListItem} from 'react-native-elements';
//Assets imports
import cardImg from '../assets/img/splash.jpg';
//Components imports
import FeedList from '../components/FeedComponent';

function Feed() {

  // const arr = [
  //   {
  //     news: 'News1',
  //     view: 'ViewNews1',
  //   },
  //   {
  //     news: 'News2',
  //     view: 'ViewNews2',
  //   },
  //   {
  //     news: 'News3',
  //     view: 'ViewNews3',
  //   },
  // ];

  // const NewsList = () => {
  //   return (
  //   arr.map((obj, index) => {
  //     return (
  //         <Card key={index}>
  //           <Card.Title>{obj.news}</Card.Title>
  //           <Card.Divider />
  //           <Card.Image source={cardImg} />
  //             <Text style={{marginBottom: 10}}>
  //               The idea with React Native Elements is more about component
  //               structure than actual design.
  //             </Text>
  //           <Button
  //             buttonStyle={{
  //               borderRadius: 0,
  //               marginLeft: 0,
  //               marginRight: 0,
  //               marginBottom: 0,
  //             }}
  //             title={obj.view}
  //           />
  //         </Card>
  //     );
  //   })
  //   );

  // }

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
