import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({

    mainContainer: { flex: 1, backgroundColor: "white", },
    imageContainer: { borderWidth: 0.2, height: 250, marginVertical: 10, borderRadius: 10 },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        borderColor: "green",
    },
    explanationText: { fontSize: 16, fontWeight: "600", marginBottom: 10, marginTop: 20 },
    descriptionText: { fontSize: 10, color: "gray" },
    buttonContainer: { marginBottom: 10, flexDirection: "row", backgroundColor: "lightgray", paddingVertical: 10 },
    priceText: { fontWeight: "bold", color: "green", letterSpacing: 1, fontSize: 20, flex: 1 },
    addButtonText: { color: "white", fontWeight: "bold", fontSize: 10, },
    addButtonContainer: { backgroundColor: "green", flex: 1, alignItems: "center", marginHorizontal: 5, borderRadius: 5, paddingVertical: 6, }

});