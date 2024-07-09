import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    mainContainer: { flex: 1, marginTop: 5, marginBottom: 5 },
    childContainer: {
        marginTop: 5,
        width: windowWidth / 2.2,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#F8F9FA',
        justifyContent: 'center',
        borderWidth: 0.3,
        borderRadius: 5,
    },
    imageContainer: {

        width: "100%",
        marginTop: 10,
        paddingHorizontal: 10,
        justifyContent: "center"
    },
    image: {
        width: '100%',
        height: 170,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "green",

    },
    itemNameAndPriceContainer: { flexDirection: 'row', justifyContent: "space-between", marginHorizontal: 10, marginVertical: 10, alignItems: "center" },
    nameText: { fontSize: 10, fontWeight: "500" },
    priceText: { fontWeight: "bold", color: "green", letterSpacing: 1 },
    buttonsContainer: { flexDirection: "row", marginBottom: 10 },
    detailButtonText: { color: "white", fontWeight: "bold", fontSize: 10, },
    detailButtonContainer: { backgroundColor: "#E49B0F", flex: 1, alignItems: "center", marginHorizontal: 5, borderRadius: 5, paddingVertical: 6, justifyContent: "center" },
    AddButtonContainer: { backgroundColor: "green", flex: 1, alignItems: "center", marginHorizontal: 5, borderRadius: 5, paddingVertical: 6, },


});