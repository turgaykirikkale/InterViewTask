import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { View, Text, SafeAreaView } from "react-native";
import ITHeader from "../../Components/Composite/ITHeader";
import ITCartAndOrderHistoryCard from "../../Components/Composite/ITCartAndOrderHistoryCard";
const OrderHistoryScreen = props => {

    const orderHistory = useSelector(state => state?.orderStore?.orderHistory);

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <ITHeader backButton title={"Order History"} />
            <View style={{ marginHorizontal: 10, marginVertical: 10, flex: 1 }}>

                <ITCartAndOrderHistoryCard data={orderHistory} orderHistory />

            </View>
        </SafeAreaView>
    )
}

export default OrderHistoryScreen;