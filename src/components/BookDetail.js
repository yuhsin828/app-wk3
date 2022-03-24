import React from "react-native";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";

const BookDetail = ({ book, navigation }) => {
    return (
        <View style={styles.bookCardContainerStyle}>
            <Pressable onPress={() => navigation.navigate("Detail", book)}>
                <Image style={styles.bookImageStyle} source={{ uri: book.image }} />
            </Pressable>
            {book.star ? (
                <View style={styles.starContainerStyle}>
                    {book.star.map((value, index) => {
                        return (
                            <View key={index.toString() + book.title}>
                                {book.star[index] ? (
                                    <Image
                                        source={require("../icon/icon_star_filled.png")}
                                        style={styles.starImageStyle}
                                    />
                                ) : (
                                    <Image
                                        source={require("../icon/icon_star_empty.png")}
                                        style={styles.starImageStyle}
                                    />
                                )}
                            </View>
                        );
                    })}
                </View>
            ) : null}
            <Text style={styles.titleTextStyle}>{book.title}</Text>
            <Text style={styles.authorTextStyle}>{book.author}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    bookCardContainerStyle: {
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
    starContainerStyle: {
        flexDirection: "row",
        marginBottom: 8,
    },
    starImageStyle: {
        width: 14,
        height: 14,
        marginLeft: 4,
    },
});

export default BookDetail;