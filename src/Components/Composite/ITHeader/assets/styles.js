import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 10,
        paddingVertical: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 10,
        borderBottomColor: "gray",
        borderBottomWidth: 0.3,
        paddingVertical: 10,
        backgroundColor: "white",
    },
    backButtonContainer: {
        backgroundColor: '#7189ba',
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    backButtonText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#ced7ea',
    },
    titleContainer: { flex: 1, alignItems: "center" },
    titleText: {
        borderColor: '#7189ba',
        fontWeight: 'bold',
        color: '#7189ba',
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingVertical: 2,
    },
    cartButtonContainer :{ flex: 1, justifyContent: "flex-end", flexDirection: "row" },
    countContainer : { backgroundColor: "green", width: 12, height: 12, borderRadius: 10, alignItems: "center", justifyContent: "center" },
    countText: { fontSize: 9, color: "white", fontWeight: "bold" }



});