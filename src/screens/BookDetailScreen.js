import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, Pressable } from "react-native";
import Star from "react-native-star-view";

const BookDetailScreen = ({ route }) => {
    const { title, author, image, star, rate, description, price } = route.params;
    return (
        <ScrollView style={{ backgroundColor: "#fff" }}>
            <View style={styles.detailContainer}>
                <Image style={styles.bookImage} source={{ uri: image }} />
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.authorText}>{author}</Text>
                {star ? (
                    <View style={styles.rateContainer}>
                        <Star score={star} style={styles.starContainer} />
                        <Text style={styles.rateText}>{rate}
                            <Text style={styles.rateMaxText}>/5.0</Text>
                        </Text>
                    </View>
                ) : null}
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionText}>{description}</Text>
                </View>
                <Pressable style={styles.buyButtonContainer}>
                    <Text style={styles.buyButtonText}>BUY NOW FOR ${price}</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    detailContainer: {
        alignItems: "center",
    },
    bookImage: {
        width: 210,
        height: 300,
        marginTop: 8,
    },
    titleText: {
        fontSize: 24,
        fontWeight: "500",
        fontFamily: "Roboto",
        color: "#131313",
        marginTop: 28,
    },
    authorText: {
        fontSize: 14,
        fontWeight: "400",
        fontFamily: "Roboto",
        color: "#666666",
        marginTop: 8,
    },
    rateContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 8,
      },
    starContainer: {
        width: 86,
        height: 17,
    },
    rateText: {
        fontSize: 14,
        fontFamily: "Roboto",
        color: "#131313",
        marginLeft: 8,
    },
    rateMaxText: {
        fontSize: 14,
        fontFamily: "Roboto",
        color: "#666666",
    },
    descriptionContainer: {
        marginTop: 16,
        marginHorizontal: 20,
    },
    descriptionText: {
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 24,
        letterSpacing: 0.012,
        textAlign: "center",
    },
    buyButtonContainer: {
        width: 190,
        height: 36,
        marginTop: 28,
        borderRadius: 4,
        backgroundColor: "#6200EE",
        justifyContent: "center",
        alignItems: "center",
    },
    buyButtonText: {
        fontSize: 14,
        fontFamily: "Roboto",
        fontWeight: "500",
        color: "#fff",
    },
});

export default BookDetailScreen;