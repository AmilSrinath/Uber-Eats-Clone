import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';
import Category from "@/components/Home/Category";

export default function HomeScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.locationText}>16 Panadura, Grace Pirice Road</Text>
                <Feather name="chevron-down" size={24} color="black" />
                <View style={styles.headerIcons}>
                    <MaterialIcons name="notifications-none" size={24} color="black" />
                    <AntDesign name="shoppingcart" size={24} color="black" />
                </View>
            </View>

            <View style={styles.searchContainer}>
                <AntDesign name="search1" size={24} color='#000' />
                <TextInput
                    placeholder="Search Uber Eats"
                    style={styles.searchInput}
                />
            </View>

            <Category />
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
        fontSize: 13,
        letterSpacing: -1,
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
    },
});
