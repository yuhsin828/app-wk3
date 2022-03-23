import React from "react-native";
import { View, Text, FlatList, SectionList, StyleSheet } from "react-native";

import BookDetail from "./BookDetail";

const BookList = ({ list, navigation }) => {
    // Flat Item
    const renderItem = ({ item }) => (
        <BookDetail book={item} navigation={navigation} />
    );
    // Section Header
    const renderSectionHeader = ({ section: { title, data } }) => (
        <View style={styles.sectionHeaderContainerStyle}>
            <Text style={styles.titleTextStyle}>{title}</Text>
            <FlatList
                horizontal={true}
                data={data}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.title}
            />
        </View>
    );
    // Section Item
    const renderSectionItem = () => null;
    // Section List
    return (
        <SectionList
            sections={list}
            stickySectionHeadersEnabled={false}
            showsHorizontalScrollIndicator={false}
            renderSectionHeader={renderSectionHeader}
            renderItem={renderSectionItem}
            keyExtractor={(item) => item.title}
        />
    );
};

const styles = StyleSheet.create({
    sectionHeaderContainerStyle: {
        paddingLeft: 20,
        marginBottom: 16,
    },
    titleTextStyle: {
        fontSize: 24,
        fontFamily: "Roboto",
        fontWeight: "500",
        marginBottom: 16,
    },
});

export default BookList;
