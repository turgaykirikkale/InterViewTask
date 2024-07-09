import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from "../../Screens/ProfileScreen";
import OrderHistoryScreen from "../../Screens/OrderHistoryScreen";

const ProfileStack = createNativeStackNavigator();

const ProfileStackTabNavigator = props => {
    return (
        <>
            <ProfileStack.Navigator
                screenOptions={{
                    headerShown: false,

                }}>
                <ProfileStack.Screen name={'ProfileScreen'} component={ProfileScreen} />
                <ProfileStack.Screen name={'OrderHistoryScreen'} component={OrderHistoryScreen} />

            </ProfileStack.Navigator>
        </>

    )


}

export default ProfileStackTabNavigator;