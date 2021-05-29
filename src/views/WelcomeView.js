//Core imports
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
//Dependencies imports

//Assets imports


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