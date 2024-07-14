import React from 'react';
import {StyleSheet, Text} from "react-native";

export default function Browse() {
    return (
        <Text style={styles.Text}>Browse</Text>
    );
}

const styles = StyleSheet.create({
    Text : {
        marginHorizontal:'auto',
        marginVertical: 'auto',
        fontSize: 30,
    }
})
