import React from "react";
import AppStackTabNavigator from "./AppStackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Entrypoint = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    
                }}>
                <Stack.Screen
                    name={'AppStackTabNavigator'}
                    component={AppStackTabNavigator}
                />
                {/* <Stack.Screen name={'InitializeScreen'} component={InitializeScreen} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Entrypoint;