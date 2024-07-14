import React from 'react';
import {StyleSheet, Text} from "react-native";

export default function Grocery() {
    return (
        <Text style={styles.Text}>Grocery</Text>
    );
}

const styles = StyleSheet.create({
    Text : {
        marginHorizontal:'auto',
        marginVertical: 'auto',
        fontSize: 30,
    }
})