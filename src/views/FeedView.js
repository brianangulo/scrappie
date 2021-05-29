//Core imports
import React from 'react';
import { StyleSheet } from 'react-native';
//Dependencies imports
import { Card, Text, Button, Icon } from "react-native-elements";
//Assets imports
import cardImg from "../assets/img/splash.jpg";

function Feed() {
    
    return (
      <Card>
        <Card.Title>News!</Card.Title>
        <Card.Divider />
        <Card.Image source={cardImg}>
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            icon={<Icon name="code" color="#ffffff" />}
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
          />
        </Card.Image>
      </Card>
    );
};

// const styles = StyleSheet.create({
//     text: {
//         fontFamily: "sanz",
//     }
// })

export default Feed;