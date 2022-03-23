import React from "react";
import { View } from "react-native";

import BookList from "../components/BookList";
import bookData from "../json/bookData.json";

const BookListScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <BookList list={bookData} navigation={navigation} />
        </View>
    );
};

export default BookListScreen;
