import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text, Card } from "react-native-elements";

function Bookmarks() {
    return (
        <Card>
            <Card.Title>News1</Card.Title>
            <Card.Divider />
            <Card.Image source={require("../assets/img/splash.jpg")} />
            <Text>These are some of the news you have saved!</Text>
        </Card>
    );
}

export default Bookmarks;