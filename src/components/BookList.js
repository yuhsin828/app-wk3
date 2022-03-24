import React from "react-native";
import { View, Text, StyleSheet, FlatList, SectionList } from "react-native";

import BookDetail from "./BookDetail";

const BookList = ({ list, navigation }) => {
    const renderItem = ({ item }) => {
        return (
            <BookDetail book={item} navigation={navigation} />
        );
    };
    const renderSectionHeader = ({ section }) => (
        <View style={styles.sectionHeader}>
            <Text style={styles.titleText}>{section.title}</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={section.data}
                renderItem={renderItem}
                keyExtractor={item => item.title}
            />
        </View>
    );
    const renderSectionItem = () => null;
    return (
        <SectionList
            sections={list}
            stickySectionHeadersEnabled={false}
            showsHorizontalScrollIndicator={false}
            renderSectionHeader={renderSectionHeader}
            renderItem={renderSectionItem}
            keyExtractor={item => item.title}
        />
    );
};

const styles = StyleSheet.create({
    sectionHeader: {
        paddingLeft: 20,
        marginTop: 8,
        marginBottom: 16,
    },
    titleText: {
        paddingBottom: 16,
        fontSize: 24,
        fontFamily: "Roboto",
        fontWeight: "500",
        color: "#131313",
    },
});

export default BookList;