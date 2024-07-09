import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, Alert } from "react-native";
import ITMarketItem from "../../Components/Composite/ITMarketItem";
import ITHeader from "../../Components/Composite/ITHeader";
import services from "../../Service";
import { AddProductToCart } from "../../GlobalStore/StoreGeneralControl";

const HomeScreen = props => {
    const { navigation } = props
    const [fdata, setFdata] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await services.FetchProductsData();
                setFdata(data);

            } catch (error) {
                alert("Product Fetch Data Error");
            }
        };

        fetchData();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <ITHeader navigation title={"Home Screen"} shoppingButton />
            <ITMarketItem products={fdata} onPressDetail={(item) => navigation.navigate("ProductDetailScreen", { item: item })} onPressAdd={(item) => AddProductToCart(item)} />
        </SafeAreaView>
    );

}

export default HomeScreen