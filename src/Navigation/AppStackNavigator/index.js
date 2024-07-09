import React, { useEffect, useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

import HomeStackTabNavigator from '../HomeStackNavigator';
import ProfileStackTabNavigator from '../ProfileStackNavigator';

const AppStackTab = createBottomTabNavigator();
const windowHeight = Dimensions.get('window').height;


const TabArr = [
    {
        name: 'Home',
        component: HomeStackTabNavigator,
        icon: 'home',
        color: 'white',
        size: 20,
        key: 0,
        iconType: 0,
    },
    {
        name: 'Profile',
        component: ProfileStackTabNavigator,
        icon: 'profile',
        color: 'white',
        size: 20,
        key: 0,
        iconType: 0,
    },
    ,
];

const TabButton = props => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);

    useEffect(() => {
        if (focused) {
            viewRef.current.animate({
                0: { scale: 1, rotate: '0deg' },
                1: { scale: 1.8, rotate: '360deg' },
            });
        } else {
            viewRef.current.animate({
                0: { scale: 1.8, rotate: '0deg' },
                1: { scale: 1, rotate: '0deg' },
            });
        }
    }, [focused]);
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
            activeOpacity={0.9}>
            <Animatable.View style={styles.container} ref={viewRef} duration={1000}>
                <Text>{item.name}</Text>
            </Animatable.View>
        </TouchableOpacity>
    );
};

const AppStackTabNavigator = (navigation, route, props) => {
    return (
        <AppStackTab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#7189ba', // backgroundColor: 'rgba(255, 255, 255, 1)',
                    // position: 'absolute',
                    // marginBottom: 25,
                    // right: 16,
                    // left: 16,
                    // borderRadius: 50,
                    borderTopColor: '#7189ba',
                    // borderTopWidth: 0.5,
                    // height: 60,
                    // borderColor: '#a2a4a6',
                    shadowColor: 'white',
                    shadowOffset: { width: 4, height: 6 },
                    shadowOpacity: 0.7,
                    shadowRadius: 10,
                    elevation: 10,
                    // display: HideTabBar(),
                },
            }}>
            {TabArr.map((item) => {
                return (
                    <AppStackTab.Screen
                        name={item.name}
                        component={item.component}
                        options={{
                            unmountOnBlur: true,
                            tabBarVisible: false,
                            tabBarShowLabel: false,
                            tabBarButton: props => <TabButton {...props} item={item} />,
                        }}
                    />
                );
            })}
        </AppStackTab.Navigator>
    );
};

export default AppStackTabNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: windowHeight >= 800 ? 4 : 0,
        height: windowHeight >= 800 ? 50 : null,
        alignItems: 'center',
        // position: 'absolute',
    },
});