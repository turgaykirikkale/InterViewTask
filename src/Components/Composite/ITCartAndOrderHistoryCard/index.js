import React from "react";
import ITButton from "../../UI/ITButton";
import { View, Text, FlatList, Image } from "react-native";
import { DeleteProductItemFromCart, AddProductItemToCart, DeleteProductFromCart } from "../../../GlobalStore/StoreGeneralControl";
import { styles } from './assets/styles';

const ITCartAndOrderHistoryCard = props => {
    const { data, orderHistory } = props
    return (
        <View style={styles.mainContainer}>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({ item, index }) => (
                    <>
                        <View style={styles.childContainer}>
                            <View style={styles.imageContainer}>
                                <Image
                                    source={{ uri: `${item.imageUrl}` }}
                                    resizeMode="stretch"
                                    style={styles.imageStyle}
                                />
                            </View>

                            <View style={styles.informationContainer}>
                                {orderHistory ?
                                    <View>
                                        <Text style={{ marginRight: 6 }}>{`${item.count} x ${item.name}`}</Text>
                                        <Text style={{ marginRight: 10 }}>{item.date}</Text>
                                    </View>
                                    : <Text style={{ marginRight: 6 }}>Tshirt</Text>}


                                <View style={{ flexDirection: "row", }}>
                                    {orderHistory ? <></>
                                        : <><ITButton
                                            onPress={() => DeleteProductItemFromCart(item)}
                                            text={"-"}
                                            textStyle={styles.buttonsTextStyle}
                                            containerStyle={styles.minusButtonContainerStyle} />

                                            <Text>{item.count}</Text>
                                            <ITButton
                                                onPress={() => AddProductItemToCart(item)}
                                                text={"+"}
                                                textStyle={styles.buttonsTextStyle}
                                                containerStyle={styles.plusButtonContainerStyle} /></>}

                                    {orderHistory ? <Text>{`Total Price : ${item.totalPrice} tl`}</Text> : <Text>{`Total Price : ${item.price * item.count} tl`}</Text>}
                                </View>
                            </View>
                            {orderHistory ? <></> : <ITButton
                                onPress={() => DeleteProductFromCart(item)}
                                text={"delete"}
                                textStyle={styles.deleteItemButtonTextStyle}
                                containerStyle={styles.deleteItemButtonContainerStyle} />}

                        </View>
                    </>
                )}
            />
        </View>
    )
}

export default ITCartAndOrderHistoryCard;