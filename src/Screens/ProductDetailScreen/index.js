import React from "react";
import { styles } from './assets/styles';
import ITButton from "../../Components/UI/ITButton";
import ITHeader from "../../Components/Composite/ITHeader";
import { AddProductToCart } from "../../GlobalStore/StoreGeneralControl";
import { SafeAreaView, View, Text, Image, ScrollView } from "react-native";



const ProductDetailScreen = props => {
    const { item } = props.route.params;
    return (
        <SafeAreaView style={styles.mainContainer}>
            <ITHeader title={"Product Detail"} backButton shoppingButton />
            <ScrollView style={{ paddingHorizontal: 10 }} enableOnAndroid={true}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: `${item.imageUrl}` }}
                        resizeMode="contain"
                        style={styles.image}
                    />
                </View>
                <View>

                    <Text style={styles.explanationText}>Açıklama</Text>
                    <Text style={styles.descriptionText}>
                        {item.description}
                    </Text>

                </View>


            </ScrollView>
            <View style={styles.buttonContainer}>
                <Text style={styles.priceText}> {`${item.price} tl`}</Text>
                <ITButton
                    onPress={() => AddProductToCart(item)}
                    text={"ADD"}
                    textStyle={styles.addButtonText}
                    containerStyle={styles.addButtonContainer}
                />
            </View>
        </SafeAreaView >
    )
}

export default ProductDetailScreen;