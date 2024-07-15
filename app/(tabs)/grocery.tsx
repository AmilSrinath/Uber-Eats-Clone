import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import Category from "@/components/Home/Category";

export default function Grocery() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.locationText}>Grocery</Text>
                <View style={styles.headerIcons}>
                    <MaterialIcons name="notifications-none" size={24} color="black" />
                    <AntDesign name="shoppingcart" size={24} color="black" />
                </View>
            </View>

            <View style={styles.searchContainer}>
                <AntDesign name="search1" size={24} color='#000' />
                <TextInput placeholder="Search Uber Eats" style={styles.searchInput} />
            </View>

            <Category filterIds={[4, 5]} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,
        marginBottom: 10,
    },
    locationText: {
        fontSize: 25,
        letterSpacing: 0,
        marginRight: -60,
        fontWeight: '500',
    },
    headerIcons: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    searchInput: {
        fontSize: 16,
        flex: 1,
        marginLeft: 10,
    },
});
