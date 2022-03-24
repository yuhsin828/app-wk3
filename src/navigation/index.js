import React, { useState } from "react";
import { Image, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import BookListScreen from "../screens/BookListScreen";
import BookDetailScreen from "../screens/BookDetailScreen";
import WishListScreen from "../screens/WishListScreen";
import MyBooksScreen from "../screens/MyBooksScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <MyTab />
        </NavigationContainer>
    );
};


// MyTab (HomeStack + WishListStack + MyBooksStack)
const MyTab = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeStack"
            screenOptions={{
                tabBarInactiveTintColor: "#666",
                tabBarActiveTintColor: "#6200EE",
                headerShown: false,
                tabBarStyle: {
                    height: 56,
                    paddingVertical: 8,
                },
                tabBarIconStyle: {
                    width: 24,
                    height: 24,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontFamily: "Roboto",
                    fontWeight: "500",
                    marginBottom: 8,
                },
            }}
        >
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused }) => (
                        <>
                            {focused ? (
                                <Image source={require("../icon/icon_home_actived.png")} />
                            ) : (
                                <Image source={require("../icon/icon_home.png")} />
                            )}
                        </>
                    ),
                }}
            />
            <Tab.Screen
                name="WishListStack"
                component={WishListStack}
                options={{
                    title: "WishList",
                    tabBarIcon: ({ focused }) => (
                        <>
                            {focused ? (
                                <Image
                                    source={require("../icon/icon_nav_bookmark_actived.png")}
                                />
                            ) : (
                                <Image source={require("../icon/icon_nav_bookmark.png")} />
                            )}
                        </>
                    ),
                }}
            />
            <Tab.Screen
                name="MyBooksStack"
                component={MyBooksStack}
                options={{
                    headerShown: false,
                    title: "My Books",
                    tabBarIcon: ({ focused }) => (
                        <>
                            {focused ? (
                                <Image source={require("../icon/icon_mybook_actived.png")} />
                            ) : (
                                <Image source={require("../icon/icon_mybook.png")} />
                            )}
                        </>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

// HomeStack (BookListScreen + BookDetailScreen)
const HomeStack = ({ navigation }) => {
    const [wish, rewish] = useState(false);
    return (
        <Stack.Navigator
            screenOptions={{
                headerShadowVisible: false,
                title: null,
            }}
        >
            <Stack.Screen
                name="Home"
                component={BookListScreen}
                options={{
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.openDrawer()}>
                            <Image source={require("../icon/icon_menu.png")} />
                        </Pressable>
                    ),
                    headerRight: () => (
                        <Pressable onPress={() => alert("Search")}>
                            <Image source={require("../icon/icon_search.png")} />
                        </Pressable>
                    ),
                }}
            />
            <Stack.Screen
                name="Detail"
                component={BookDetailScreen}
                options={{
                    // headerLeft: () => (
                    //     <Pressable onPress={() => navigation.navigate("Home", route)}>
                    //         <Image source={require("../icon/icon_back.png")} />
                    //     </Pressable>
                    // ),
                    headerBackImageSource: require("../icon/icon_back.png"),
                    headerRight: () => (
                        <Pressable onPress={() => rewish(!wish)}>
                            {wish ? (
                                <Image source={require("../icon/icon_bookmark_actived.png")} />
                            ) : (
                                <Image source={require("../icon/icon_bookmark.png")} />
                            )}
                        </Pressable>
                    ),
                }}
            />
        </Stack.Navigator>
    );
};

// WishListStack (WishListScreen)
const WishListStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="WishList"
                component={WishListScreen}
                options={{
                    headerShadowVisible: false,
                    title: null,
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.openDrawer()}>
                            <Image source={require("../icon/icon_menu.png")} />
                        </Pressable>
                    ),
                    headerRight: () => (
                        <Pressable onPress={() => alert("Search")}>
                            <Image source={require("../icon/icon_search.png")} />
                        </Pressable>
                    ),
                }}
            />
        </Stack.Navigator>
    );
};

// MyBooksStack (MyBooksScreen)
const MyBooksStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MyBooks"
                component={MyBooksScreen}
                options={{
                    headerShadowVisible: false,
                    title: null,
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.openDrawer()}>
                            <Image source={require("../icon/icon_menu.png")} />
                        </Pressable>
                    ),
                    headerRight: () => (
                        <Pressable onPress={() => alert("Search")}>
                            <Image source={require("../icon/icon_search.png")} />
                        </Pressable>
                    ),
                }}
            />
        </Stack.Navigator>
    );
};


export default Navigation;