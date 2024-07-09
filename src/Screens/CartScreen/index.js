import _ from "lodash";
import { styles } from './assets/styles';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from "react";
import ITButton from "../../Components/UI/ITButton";
import { SafeAreaView, View, Text, } from "react-native";
import ITHeader from "../../Components/Composite/ITHeader";
import ITCartAndOrderHistoryCard from "../../Components/Composite/ITCartAndOrderHistoryCard";


const CartScreen = props => {
    const { navigation } = props;
    const products = useSelector(state => state?.cartStore?.products);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let calculatedPrice = 0;
        _.each(products, (item) => {
            calculatedPrice = calculatedPrice + (item.count * item.price)
        })
        setTotalPrice(calculatedPrice);
    }, [products])




    return (
        <SafeAreaView style={styles.mainContainer}>
            <ITHeader title={"Shopping cart"} backButton />
            <View style={styles.orderHistoryCardContainer}>

                <ITCartAndOrderHistoryCard data={products} />

            </View>
            <View style={styles.paymentContainer}>
                <Text>{`Total Price: ${totalPrice} tl`}</Text>
                <ITButton
                    disabled={products.length == 0 ? true : false}
                    onPress={() => navigation.navigate("PaymentScreen")}
                    text={"Paymet"}
                    textStyle={styles.buttonText}
                    containerStyle={styles.buttonContainer} />
            </View>
        </SafeAreaView>
    )
}

export default CartScreen;