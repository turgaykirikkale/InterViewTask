import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    childContainer: {
        borderWidth: 0.2,
        marginVertical: 10,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    imageContainer: {
        width: 90,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 5,
        height: 90,
    },
    imageStyle: {
        borderRadius: 50,
        width: "100%",
        height: "90%",
        borderWidth: 1,
        borderColor: "green",
    },
    informationContainer :{ flexDirection: "row", alignItems: "center", flex: 1, justifyContent: "space-between", paddingHorizontal: 10 },
    buttonsTextStyle : { fontWeight: "bold", color: "white" },
    minusButtonContainerStyle : { width: 20, height: 20, borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: "red", marginRight: 6 },
    plusButtonContainerStyle : { width: 20, height: 20, borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: "green", marginHorizontal: 6 },
    deleteItemButtonTextStyle : { fontWeight: "bold", color: "white", fontSize: 10 },
    deleteItemButtonContainerStyle : { position: "absolute", backgroundColor: "red", borderRadius: 10, paddingHorizontal: 10, right: 10, top: 6 }

});