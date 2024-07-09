import React from "react";
import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import ITButton from "../../UI/ITButton";
import { styles } from './assets/styles';


const ITMarketItem = props => {

    const { products, onPressDetail, onPressAdd } = props;
    return (
        <View style={styles.mainContainer}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={products}
                style={{ alignSelf: "center" }}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => onPressDetail && onPressDetail(item)}
                        style={styles.childContainer}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={{
                                    uri: `${item.imageUrl}`,
                                }}
                                resizeMode="contain"
                                style={styles.image}
                            />
                        </View>
                        <View style={styles.itemNameAndPriceContainer}>
                            <Text style={styles.nameText}>{item.name}</Text>
                            <Text style={styles.priceText}> {`${item.price} tl`}</Text>
                        </View>

                        <View style={styles.buttonsContainer}>
                            <ITButton
                                onPress={() => onPressDetail && onPressDetail(item)}
                                text={"DETAIL"}
                                textStyle={styles.detailButtonText}
                                containerStyle={styles.detailButtonContainer}
                            />
                            <ITButton
                                onPress={() => onPressAdd && onPressAdd(item)}
                                text={"ADD"}
                                textStyle={styles.detailButtonText}
                                containerStyle={styles.AddButtonContainer}
                            />
                        </View>

                    </TouchableOpacity>
                )}
                numColumns={2}
            />
        </View>
    );
}

export default ITMarketItem;