import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, Pressable } from "react-native";
import Star from "react-native-star-view";

const BookDetailScreen = ({ route }) => {
    const { title, author, image, star, description, price } = route.params;
    return (
        <ScrollView style={{ backgroundColor: "#fff" }}>
            <View style={styles.detailContainerStyle}>
                <Image style={styles.bookImageStyle} source={{ uri: image }} />
                <View style={styles.bookInfoContainerStyle}>
                    <Text style={styles.titleTextStyle}>{title}</Text>
                    <Text style={styles.authorTextStyle}>{author}</Text>
                    {star ? (
                        <Star score={star} style={styles.starStyle} />
                    ) : null}
                </View>
                <View style={styles.descriptionContainerStyle}>
                    <Text style={styles.descriptionTextStyle}>{description}</Text>
                </View>
                <Pressable>
                    <View style={styles.buyButtonContainerStyle}>
                        <Text style={styles.buyButtonTextStyle}>BUY NOW FOR ${price}</Text>
                    </View>
                </Pressable>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    detailContainerStyle: {
        alignItems: "center",
    },
    bookImageStyle: {
        width: 210,
        height: 300,
        marginTop: 8,
    },
    bookInfoContainerStyle: {
        marginTop: 28,
        alignItems: "center",
    },
    titleTextStyle: {
        fontSize: 24,
        fontWeight: "500",
        fontFamily: "Roboto",
        color: "#131313",
    },
    authorTextStyle: {
        fontSize: 14,
        fontWeight: "400",
        fontFamily: "Roboto",
        color: "#666",
        marginTop: 8,
    },
    rateContainerStyle: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 147,
        height: 16,
        marginTop: 8,
    },
    starContainerStyle: {
        flexDirection: "row",
    },
    starImageStyle: {
        width: 14,
        height: 14,
        marginLeft: 4,
    },
    rateTextStyle: {
        fontSize: 14,
        fontFamily: "Roboto",
        color: "#131313",
        marginLeft: 8,
    },
    rateMaxTextStyle: {
        fontSize: 14,
        fontFamily: "Roboto",
        color: "#666",
    },
    descriptionContainerStyle: {
        marginTop: 16,
        marginHorizontal: 20,
    },
    descriptionTextStyle: {
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 24,
        letterSpacing: 0.168,
        textAlign: "center",
    },
    buyButtonContainerStyle: {
        width: 190,
        height: 36,
        marginTop: 28,
        marginHorizontal: 85,
        borderRadius: 4,
        backgroundColor: "#6200EE",
        justifyContent: "center",
        alignItems: "center",
    },
    buyButtonTextStyle: {
        fontSize: 14,
        fontFamily: "Roboto",
        fontWeight: "500",
        color: "#fff",
    },
    starStyle: {
        width: 86,
        height: 17,
        marginBottom: 8.5
    },
});

export default BookDetailScreen;