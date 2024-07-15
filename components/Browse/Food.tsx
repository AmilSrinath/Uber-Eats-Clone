import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

export default function Food({uri,title}: {uri: string, title: string}) {
    return (
        <View style={styles.food}>
            <Image source={{ uri }} style={styles.image} />
            <Text style={styles.foodText}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 90,
        borderRadius: 10,
    },
    food: {
        marginBottom: 20,
        alignItems: 'flex-start'
    },
    foodText: {
        fontSize: 20,
        fontWeight: "600",
    }
});