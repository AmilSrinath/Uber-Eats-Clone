import React from 'react';
import {TouchableOpacity, View, StyleSheet, Image, Text} from "react-native";

export default function AccountCategory({uri,text}: {uri: string, text: string}) {
    return (
        <TouchableOpacity style={styles.boader}>
            <View>
                <Image source={{uri}} style={styles.image} />
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    boader : {
        backgroundColor: '#f8f9fa',
        borderRadius: 10,
    },
    image: {
        width: 40,
        height: 40,
        marginLeft: 29,
        marginRight: 29,
        marginTop: 25,
        marginBottom: 5,
    },
    text: {
        fontSize: 16,
        textAlign: 'center'
    },
});
