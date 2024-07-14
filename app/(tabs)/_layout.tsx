import { Tabs } from 'expo-router';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint, headerShown: false }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size }) => <Feather name="home" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="grocery"
                options={{
                    title: 'Grocery',
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="food-apple-outline" size={28} color={color} />,
                }}
            />
            <Tabs.Screen
                name="browse"
                options={{
                    title: 'Browse',
                    tabBarIcon: ({ color, size }) => <MaterialIcons name="manage-search" size={30} color={color} />,
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    title: 'Account',
                    tabBarIcon: ({ color, size }) => <AntDesign name="user" size={24} color={color} />,
                }}
            />
        </Tabs>
    );
}
