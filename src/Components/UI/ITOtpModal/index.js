import React from "react";
import ITButton from "../ITButton";
import { styles } from './assets/styles';
import { Modal, View, TextInput } from "react-native";


const ITOtpModal = props => {

    const { modalVisible, setModalVisible, otp, setOtpFromModal, approvePayment } = props;

    return <Modal animationType="slide" transparent={true} visible={modalVisible} >

        <View style={styles.mainContainer}>
            <View style={styles.childContainer}>
                <View style={styles.textInputContainer}>
                    <TextInput
                        value={otp}
                        onChangeText={(value) => setOtpFromModal && setOtpFromModal(value)}
                        placeholder="Otp"
                        maxLength={6}
                        keyboardType="numeric" />
                </View>
                <ITButton
                    onPress={() => approvePayment && approvePayment()}
                    text={"Approve"}
                    containerStyle={styles.buttonContainer}
                    textStyle={styles.buttonText} />
                <ITButton text={"Cancel "} containerStyle={{ backgroundColor: "red", alignItems: "center", paddingVertical: 8, borderRadius: 8, }}
                    onPress={() => setModalVisible && setModalVisible()} />
            </View>
        </View>
    </Modal>
}

export default ITOtpModal;