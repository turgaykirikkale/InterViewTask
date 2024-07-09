
import { NativeModules } from 'react-native';


const { PaymentsdkBridge } = NativeModules;

const initializePaymentSDK = () => {
    PaymentsdkBridge.init();
};

const startPaymentProcess = (cardNo, expDate, cvv, amount, successCallback, errorCallback) => {
    PaymentsdkBridge.startPayment(cardNo, expDate, cvv, amount, successCallback, errorCallback);
};

const confirmPaymentProcess = (otp, successCallback, errorCallback) => {
    PaymentsdkBridge.confirmPayment(otp, successCallback, errorCallback);
};

export {
    initializePaymentSDK,
    startPaymentProcess,
    confirmPaymentProcess
};