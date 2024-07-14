import React from 'react';
import {StyleSheet, Text} from "react-native";

export default function Account() {
    return (
        <Text style={styles.Text}>Account</Text>
    );
}

const styles = StyleSheet.create({
    Text : {
        marginHorizontal:'auto',
        marginVertical: 'auto',
        fontSize: 30,
    }
})
