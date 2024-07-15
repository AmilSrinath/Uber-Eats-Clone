import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { DocumentData, collection, getDocs, query} from "firebase/firestore";
import {db} from "@/config/FirebaseConfig";
import CategoryItem from "./CategoryItem";

// @ts-ignore
export default function Category({filterIds}) {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        GetCategoryList();
    }, []);

    const GetCategoryList = async () => {
        setCategoryList([]);
        const q = query(collection(db, "Category"));

        const querySnapshot = await getDocs(q);

        const filteredCategories: ((prevState: never[]) => never[]) | DocumentData[] = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            if (filterIds.includes(data.id)) {
                filteredCategories.push(data);
            }
        });
        // @ts-ignore
        setCategoryList(filteredCategories);
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
                        onCategoryPress={(value: any) => console.log(value)}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    categoryContainer: {
        marginTop: 5,
        right: 15
    },
    categoryList: {
        paddingLeft: 20,
    },
});
