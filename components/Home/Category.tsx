import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/config/FirebaseConfig";
import CategoryItem from "./CategoryItem";
import { Colors } from "@/constants/Colors";

export default function Category() {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        GetCategoryList();
    }, []);

    const GetCategoryList = async () => {
        setCategoryList([]);
        const q = query(collection(db, "Category"));

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            setCategoryList((prev) => [...prev, doc.data()]);
        });
    };

    return (
        <View style={styles.categoryContainer}>
            <FlatList
                data={categoryList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.categoryList}
                renderItem={({ item, index }) => (
                    <CategoryItem
                        category={item}
                        key={index}
                        onCategoryPress={(value) => console.log(value)}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    categoryContainer: {
        marginTop: 5,
    },
    categoryHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    categoryTitle: {
        fontSize: 20,
    },
    viewAllText: {
        color: Colors.PRIMARY,
    },
    categoryList: {
        paddingLeft: 20,
    },
});
