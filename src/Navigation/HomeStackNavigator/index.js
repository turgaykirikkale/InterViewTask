import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../../Screens/HomeScreen";
import ProductDetailScreen from "../../Screens/ProductDetailScreen";
import CartScreen from "../../Screens/CartScreen";
import PaymentScreen from "../../Screens/PaymentScreen";

const HomeStack = createNativeStackNavigator();

const HomeStackTabNavigator = props => {

    return (
        <View style={{ flex: 1 }}>
            <HomeStack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>

                <HomeStack.Screen name={'HomeScreen'} component={HomeScreen} />
                <HomeStack.Screen name={'ProductDetailScreen'} component={ProductDetailScreen} />
                <HomeStack.Screen name={'CartScreen'} component={CartScreen} />
                <HomeStack.Screen name={'PaymentScreen'} component={PaymentScreen} />

            </HomeStack.Navigator>
        </View>
    );


}

export default HomeStackTabNavigator;