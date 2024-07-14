import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

// @ts-ignore
export default function CategoryItem({ category, onCategoryPress }) {
    return (
        <TouchableOpacity onPress={() => onCategoryPress(category)}>
            <View style={styles.itemContainer}>
                <Image
                    source={{ uri: category.icon }}
                    style={styles.itemImage}
                />
            </View>
            <Text style={styles.itemText}>{category.name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        padding: 20,
        borderRadius: 50,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemImage: {
        width: 30,
        height: 30,
    },
    itemText: {
        color: 'black',
        fontSize: 14,
        textAlign: "center",
        marginTop: 5,
        right: 5
    },
});
