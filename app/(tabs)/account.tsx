import React from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import AccountCategory from "@/components/Account/AccountCategory";
import AccountOption from "@/components/Account/AccountOption";

export default function Account() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.locationText}>Amil Srinath</Text>
                <View style={styles.headerIcons}>
                    <FontAwesome5 name="user" size={40} color="black" />
                </View>
            </View>

            <ScrollView>
                <View style={styles.headerCategory}>
                    <AccountCategory uri='https://cdn-icons-png.flaticon.com/128/306/306795.png' text='Favourites'/>
                    <AccountCategory uri='https://cdn-icons-png.flaticon.com/128/3258/3258446.png' text='Wallet'/>
                    <AccountCategory uri='https://cdn-icons-png.flaticon.com/128/3500/3500833.png' text='Orders'/>
                </View>

                <View style={styles.listContainer}>
                    <AccountOption
                        uri='https://cdn-icons-png.flaticon.com/128/437/437522.png'
                        title='Family'
                        subtitle='Manage a family profile'
                    />
                    <AccountOption
                        uri='https://cdn-icons-png.flaticon.com/128/84/84947.png'
                        title='Ride'
                    />
                    <AccountOption
                        uri='https://cdn-icons-png.flaticon.com/128/2907/2907972.png'
                        title='Promotions'
                    />
                    <AccountOption
                        uri='https://cdn-icons-png.flaticon.com/128/2597/2597085.png'
                        title='Help'
                    />
                    <AccountOption
                        uri='https://cdn-icons-png.flaticon.com/128/3139/3139155.png'
                        title='Set up your business profile'
                        subtitle='Automate work travel & meal expenses'
                    />
                    <AccountOption
                        uri='https://cdn-icons-png.flaticon.com/128/4175/4175032.png'
                        title='Invite friends'
                        subtitle='Learn how to get free delivery'
                    />
                    <AccountOption
                        uri='https://cdn-icons-png.flaticon.com/128/10348/10348976.png'
                        title='Privacy'
                    />
                    <AccountOption
                        uri='https://cdn-icons-png.flaticon.com/128/901/901163.png'
                        title='Communication'
                    />
                    <AccountOption
                        uri='https://cdn-icons-png.flaticon.com/128/925/925748.png'
                        title='Earn by driving or delivering'
                    />
                    <AccountOption
                        uri='https://cdn-icons-png.flaticon.com/128/8006/8006318.png'
                        title='Voice command settinas'
                    />
                    <AccountOption
                        uri='https://cdn-icons-png.flaticon.com/128/1077/1077063.png'
                        title='Manage Uber account'
                    />
                    <AccountOption
                        uri='https://cdn-icons-png.flaticon.com/128/3503/3503827.png'
                        title='About'
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 50,
        marginBottom: 10,
    },
    locationText: {
        fontSize: 35,
        letterSpacing: 0,
        marginRight: -60,
        fontWeight: '500',
    },
    headerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    headerCategory: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    listContainer: {
        marginTop: 20,
    },
});
