import services from "../../Service";
import React, { useEffect } from "react";
import ITButton from "../../Components/UI/ITButton";
import { SafeAreaView, View, Text } from "react-native";
import ITHeader from "../../Components/Composite/ITHeader";
import { FetchOrderHistory } from "../../GlobalStore/StoreGeneralControl";


const ProfileScreen = props => {

    useEffect(() => {

        const fetchData = async () => {
            try {
                const data = await services.FetchOrderHistory();
                FetchOrderHistory(data);

            } catch (error) {
                alert("ADS Fetch Data Error");
            }
        };

        fetchData();
    }, []);



    const { navigation } = props;
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>


            <ITHeader title={"Profile"} />
            <ITButton
                onPress={() => navigation.navigate("OrderHistoryScreen")}
                text={"Order History"}
                containerStyle={{ borderWidth: 1, marginHorizontal: 10, paddingVertical: 10, marginVertical: 10, borderRadius: 10, paddingHorizontal: 10 }} />



        </SafeAreaView>
    )

}

export default ProfileScreen;