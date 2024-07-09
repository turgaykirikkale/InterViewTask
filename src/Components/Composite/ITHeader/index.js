import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import ITButton from "../../UI/ITButton";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import _ from "lodash";
import { styles } from './assets/styles';




const ITHeader = props => {
    const { backButton, title, navigateShoppingBasket, shoppingButton } = props
    const products = useSelector(state => state?.cartStore?.products);
    const navigation = useNavigation();

    const [totalCountCart, setTotalCountCart] = useState(0);

    useEffect(() => {
        let totalCount = 0;
        _.each(products, (item) => {
            totalCount = totalCount + item.count;
        })
        setTotalCountCart(totalCount);
    }, [products]);

    return (
        <View
            style={styles.mainContainer}>
            <View style={{ flex: 1, }}>
                {backButton ? <TouchableOpacity
                    style={styles.backButtonContainer}
                    onPress={() => navigation.goBack()}>
                    <Text
                        style={styles.backButtonText}>{`<`}</Text>
                </TouchableOpacity> : <></>}

            </View>
            <View style={styles.titleContainer}>

                <Text style={styles.titleText}> {title}</Text>
            </View>
            <View style={styles.cartButtonContainer}>
                {shoppingButton ?
                    <>
                        <ITButton
                            disabled={totalCountCart == 0 ? true : false}
                            onPress={() => navigation.navigate("CartScreen")}
                            text={"Cart"}
                            containerStyle={{}}
                            textStyle={{ color: '#7189ba', }}
                        />
                        <View style={styles.countContainer}>
                            <Text style={styles.countText}>{totalCountCart}</Text>
                        </View>
                    </>
                    : <></>}

            </View>
        </View>

    )
}

export default ITHeader;