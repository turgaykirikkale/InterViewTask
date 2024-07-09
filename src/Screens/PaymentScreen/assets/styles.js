import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({

    mainContainer: { flex: 1, backgroundColor: "white" },
    childContainer: { marginHorizontal: 10, marginVertical: 10, flex: 1 },
    cardNumberContainer: { borderWidth: 1, borderRadius: 10, borderColor: "gray", paddingHorizontal: 10, paddingVertical: 10 },
    cvvAndExpDateContainer: { flexDirection: 'row', marginVertical: 10, justifyContent: "space-between" },
    cvvContainer: { borderWidth: 1, borderRadius: 10, borderColor: "gray", paddingHorizontal: 10, paddingVertical: 10, flex: 1, marginRight: 10 },
    expDateContainer: { borderWidth: 1, borderRadius: 10, borderColor: "gray", paddingHorizontal: 10, paddingVertical: 10, flex: 1, marginLeft: 10 },
    buttonText: { color: "white", fontWeight: "700" },
    buttonContainer: { backgroundColor: "green", marginBottom: 10, marginHorizontal: 10, borderRadius: 5, paddingVertical: 10, alignItems: "center" },
    
});