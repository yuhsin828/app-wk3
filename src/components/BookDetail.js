import React from "react-native";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import Star from "react-native-star-view";

const BookDetail = ({ book, navigation }) => {
    return (
        <View style={styles.cardContainerStyle}>
            <Pressable onPress={() => navigation.navigate("Detail", book)}>
                <Image style={styles.bookImageStyle} source={{ uri: book.image }} />
            </Pressable>
            {book.star ? (
                <Star score={book.star} style={styles.starStyle} />
            ) : null}
            <Text style={styles.titleTextStyle}>{book.title}</Text>
            <Text style={styles.authorTextStyle}>{book.author}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainerStyle: {
        flexDirection: "column",
        marginRight: 16,
    },
    bookImageStyle: {
        width: 140,
        height: 200,
        marginBottom: 16,
    },
    titleTextStyle: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Roboto",
        color: "#131313",
        marginBottom: 8,
    },
    authorTextStyle: {
        fontSize: 12,
        fontWeight: "500",
        fontFamily: "Roboto",
        color: "#131313",
        opacity: 0.5,
    },
    starStyle: {
        width: 86,
        height: 17,
        marginBottom: 8.5
    },
});

export default BookDetail;