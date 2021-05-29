//Core imports
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
//Dependencies imports
import LottieView from "lottie-react-native";
//Assets imports
import newspaperAnim from "../assets/animations/newspaper.json";

//Main component being exported is WelcomeView
function WelcomeView() {
    
    return (
      <SafeAreaView style={styles.view}>
        <Text style={styles.sampleText}>Hello World!!</Text>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sampleText: {
        fontWeight: "bold",
        textAlign: "center",
        textAlignVertical: "center",
        justifyContent: "center",
        margin: "auto",
        color: "black"
    },
    view: {
        justifyContent: "center",
    },
    sample2: {
        flex: 2
    }
})

export default WelcomeView;