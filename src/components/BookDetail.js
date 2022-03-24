import React from "react";
import { View, Pressable, Image, Text, StyleSheet } from "react-native";
import Star from "react-native-star-view";

const BookDetail = ({ book, navigation }) => {
    return (
        <View style={styles.cardContainer}>
            <Pressable onPress={() => navigation.navigate("Detail", book)}>
                <Image style={styles.bookImage} source={{ uri: book.image }} />
            </Pressable>
            {book.star ? (
                <Star score={book.star} style={styles.starContainer} />
            ) : null}
            <Text style={styles.titleText}>{book.title}</Text>
            <Text style={styles.authorText}>{book.author}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        marginRight: 16,
    },
    bookImage: {
        width: 140,
        height: 200,
        marginBottom: 16,
    },
    starContainer: {
        width: 86,
        height: 17,
        marginBottom: 8
    },
    titleText: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Roboto",
        color: "#131313",
        marginBottom: 8,
    },
    authorText: {
        fontSize: 12,
        fontWeight: "500",
        fontFamily: "Roboto",
        color: "#131313",
        opacity: 0.5,
    },
});

export default BookDetail;