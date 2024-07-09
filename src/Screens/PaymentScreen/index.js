import _ from "lodash";
import moment from "moment"
import { Alert } from "react-native";
import services from "../../Service";
import { styles } from './assets/styles';
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from "react";
import ITButton from "../../Components/UI/ITButton";
import ITOtpModal from "../../Components/UI/ITOtpModal";
import ITHeader from "../../Components/Composite/ITHeader";
import { SafeAreaView, View, Text, TextInput } from "react-native";
import { ClearAllItemFromCart } from "../../GlobalStore/StoreGeneralControl";
import { initializePaymentSDK, startPaymentProcess, confirmPaymentProcess } from "../../Bridges/PaymentSDK";

const PaymentScreen = props => {
    const { navigation } = props;

    const [paymentState, setPaymentState] = useState({
        cardNumber: null,
        cvv: null,
        expirationDate: null
    });
    const [totalPrice, setTotalPrice] = useState(0);
    const [modal, setModal] = useState(false);
    const products = useSelector(state => state?.cartStore?.products);
    const [otp, setOtp] = useState(null)

    initializePaymentSDK();


    useEffect(() => {
        let calculatedPrice = 0;
        _.each(products, (item) => {
            calculatedPrice = calculatedPrice + (item.count * item.price)
        })
        setTotalPrice(calculatedPrice);
    }, [products])

    const setExpirationDate = (value) => {
        let month;
        let year;
        let formattedText = value.replace(/\D/g, '');
        if (formattedText.length > 2) {
            month = formattedText.slice(0, 2);
            year = formattedText.slice(2)
            formattedText = `${month}/${year}`;
        }

        setPaymentState(prevState => ({
            ...prevState,
            expirationDate: formattedText
        }))

        const regex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
        if (regex.test(formattedText)) {
            console.log("True date")
            console.log("month", month)
            console.log("year", year)
        } else {
            console.log("wrong date")
            console.log("month", month)
            console.log("year", year)
        }

    }


    const handleStartPayment = () => {
        const formattedExpDate = paymentState.expirationDate.replace(/\//g, '');
        console.log("EXPDATE,", formattedExpDate)
        startPaymentProcess(
            paymentState.cardNumber,
            formattedExpDate,
            paymentState.cvv,
            totalPrice,
            (message) => { setModal(true) },
            (error) => Alert.alert('Payment Error', error)
        );
    };

    const handleConfirmPayment = () => {
        confirmPaymentProcess(
            otp,
            (message) => Alert.alert('Confirmation Success', message, [{ text: 'OK', onPress: () => handlePress() }]),
            (error) => Alert.alert('Confirmation Error', error)
        );
    };

    const handlePress = () => {
        ClearAllItemFromCart();
        setOtp(null);
        setModal(false);
        navigation.navigate('HomeScreen');

        _.each(products, (item) => {
            let data = {};
            data.count = item.count;
            data.date = moment().format('DD/MM/YYYY');
            data.imageUrl = item.imageUrl;
            data.name = item.name;
            data.totalPrice = item.count * item.price;
            services.AddOrderToHistory(data);
        })

        //Burada OrderHistory Tablosuna kayıt atılacak.
    };

    const controlButtonDisabled = () => {
        if (paymentState.cardNumber == null || paymentState.cvv == null || paymentState.expirationDate == null) {
            return true
        } else {
            return false
        }
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ITOtpModal otp={otp} setOtpFromModal={(value) => setOtp(value)} modalVisible={modal} setModalVisible={() => setModal(false)} approvePayment={() => handleConfirmPayment()} />
            <ITHeader backButton title={"Payment"} shoppingButton />
            <View style={styles.childContainer}>
                <View style={styles.cardNumberContainer}>
                    <Text>Card Number</Text>
                    <TextInput
                        keyboardType="numeric"
                        value={paymentState.cardNumber}
                        onChangeText={(value) => setPaymentState(prevState => ({
                            ...prevState,
                            cardNumber: value
                        }))}
                        placeholder="Card Number"
                        maxLength={16}
                        letterSpacing={3} />
                </View>
                <View style={styles.cvvAndExpDateContainer}>
                    <View style={styles.cvvContainer}>
                        <Text>CVV</Text>
                        <TextInput
                            keyboardType="numeric"
                            value={paymentState.cvv}
                            onChangeText={(value) => setPaymentState(prevState => ({
                                ...prevState,
                                cvv: value
                            }))}
                            placeholder="CVV"
                            maxLength={3}
                            letterSpacing={3} />
                    </View>
                    <View style={styles.expDateContainer}>
                        <Text>Expiration Date</Text>
                        <TextInput
                            keyboardType="numeric"
                            value={paymentState.expirationDate}
                            onChangeText={(value) => setExpirationDate(value)}
                            placeholder="MM/YY"
                            maxLength={5}
                            letterSpacing={3}
                        />
                    </View>
                </View>
                <Text style={{ alignSelf: "flex-end" }}>{`Total Price : ${totalPrice} tl`}</Text>
            </View>
            <ITButton
                disabled={controlButtonDisabled()}
                onPress={() => handleStartPayment()}
                text={"COMPLETE PURCHASE"}
                textStyle={styles.buttonText}
                containerStyle={styles.buttonContainer} />
        </SafeAreaView>
    )
}
export default PaymentScreen;