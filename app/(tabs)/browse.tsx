import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import Category from "@/components/Home/Category";
import Food from "@/components/Browse/Food";

export default function Browse() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.locationText}>Browse</Text>
                <View style={styles.headerIcons}>
                    <MaterialIcons name="notifications-none" size={24} color="black" />
                    <AntDesign name="shoppingcart" size={24} color="black" />
                </View>
            </View>

            <View style={styles.searchContainer}>
                <AntDesign name="search1" size={24} color='#000' />
                <TextInput placeholder="Search Uber Eats" style={styles.searchInput} />
            </View>

            <ScrollView>
                <Category filterIds={[4, 5, 12]} />

                <Text style={styles.title}>Food near you</Text>

                <View style={styles.foodContainer}>
                    <Food
                        uri='https://img.freepik.com/free-photo/3d-delicious-food-tet-vietnamese-new-year_23-2151077539.jpg?semt=ais_user'
                        title='Chinese'
                    />
                    <Food
                        uri='https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?ga=GA1.1.193159675.1721032502&semt=sph'
                        title='Pizza'
                    />
                    <Food
                        uri='https://img.freepik.com/free-photo/rice-noodles-bowl-curry-paste-with-chili-cucumber-long-bean-lime-garlic-spring-onion_1150-27062.jpg?ga=GA1.1.193159675.1721032502&semt=ais_user'
                        title='Sri Lankan'
                    />
                    <Food
                        uri='https://img.freepik.com/free-photo/delicious-indian-food-tray-flat-lay_23-2148723508.jpg?ga=GA1.1.193159675.1721032502&semt=ais_user'
                        title='Indian'
                    />
                    <Food
                        uri='https://img.freepik.com/free-photo/glaze-pouring-chocolate-cake-wooden-board-syrop-side-view_141793-15491.jpg?ga=GA1.1.193159675.1721032502&semt=ais_user'
                        title='Desserts'
                    />
                    <Food
                        uri='https://img.freepik.com/free-photo/elevated-view-healthy-egg-vegetables-sandwich-bowl_23-2147953632.jpg?ga=GA1.1.193159675.1721032502&semt=ais_user'
                        title='Healthy'
                    />
                    <Food
                        uri='https://img.freepik.com/free-photo/delicious-hot-dogs-arrangement_23-2149235978.jpg?ga=GA1.1.193159675.1721032502&semt=ais_user'
                        title='Hot dog'
                    />
                    <Food
                        uri='https://img.freepik.com/free-photo/glass-beer-with-various-snacks-it-table_141793-16625.jpg?ga=GA1.1.193159675.1721032502&semt=ais_user'
                        title='Bar food'
                    />
                    <Food
                        uri='https://img.freepik.com/free-photo/top-view-sliced-vegetable-salad-peppered-with-chicken-slices-inside-plate-with-fresh-vegetables-dark-blue-desk_140725-38930.jpg?ga=GA1.1.193159675.1721032502&semt=ais_user'
                        title='Vegetarian friendly'
                    />
                    <Food
                        uri='https://img.freepik.com/free-photo/flexitarian-diet-food-assortment_23-2148955492.jpg?ga=GA1.1.193159675.1721032502&semt=ais_user'
                        title='Affordable meals'
                    />
                    <Food
                        uri='https://img.freepik.com/free-photo/assorted-spices-near-chicken-kebab_23-2147894625.jpg?ga=GA1.1.193159675.1721032502&semt=ais_user'
                        title='North Indian'
                    />
                    <Food
                        uri='https://img.freepik.com/free-photo/variety-snacks-nuts-with-beer-cups_114579-4432.jpg?ga=GA1.1.193159675.1721032502&semt=ais_user'
                        title='Pub'
                    />
                    <Food
                        uri='https://img.freepik.com/free-photo/top-view-chinese-hot-pot_23-2149529815.jpg?ga=GA1.1.193159675.1721032502&semt=ais_user'
                        title='Asian fusion'
                    />
                    <Food
                        uri='https://img.freepik.com/free-photo/top-view-islamic-family-eating-together_23-2149636058.jpg?ga=GA1.1.193159675.1721032502&semt=ais_user'
                        title='Family meals'
                    />
                    <Food
                        uri='https://img.freepik.com/free-photo/cheesy-tokbokki-korean-traditional-food-black-board-background-lunch-dish_1150-42986.jpg?ga=GA1.1.193159675.1721032502&semt=ais_user'
                        title='Korean'
                    />
                    <Food
                        uri='https://img.freepik.com/free-photo/side-view-organic-fresh-juices-bottles-served-with-tubes-fruits-wooden-cutting-board_140725-94665.jpg?ga=GA1.1.193159675.1721032502&semt=sph'
                        title='Juice & Smoothies'
                    />
                </View>

            </ScrollView>
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
    title: {
        fontSize: 23,
        fontWeight: '500',
        margin: 15
    },
    foodContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
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
