package com.interviewtask

import android.content.Context
import android.os.Debug
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Callback
import com.initialcode.paymentsdk.PaymentSDK
import com.initialcode.paymentsdk.PaymentSDKResponseCallback
import java.io.Console

class PaymentsdkBridge(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    val paymentSDK = PaymentSDK()

    companion object {
        private lateinit var context: Context
    }

    init {
        context = reactContext.applicationContext
    }

    override fun getName(): String {
        return "PaymentsdkBridge"
    }

    @ReactMethod
    fun init() {
        PaymentSDK.init(context)
        println("BASLATILDI")
    }

    @ReactMethod
    fun startPayment(cardNo: String, expDate: String, cvv: String, amount: Double, successCallback: Callback, errorCallback: Callback) {
        paymentSDK.startPayment(cardNo, expDate, cvv, amount, object : PaymentSDKResponseCallback {

            override fun onFailure(message: String) {
                println("ALINAMADI")
                errorCallback.invoke("Payment Failed: $message")

            }

            override fun onSuccess() {
                println("Alındı")
                successCallback.invoke("Payment Successful")
            }
        })
    }

    @ReactMethod
    fun confirmPayment(otp: String, successCallback: Callback, errorCallback: Callback) {
        paymentSDK.confirmPayment(otp, object : PaymentSDKResponseCallback {
            override fun onFailure(message: String) {
                errorCallback.invoke("Payment Failed: $message")
            }

            override fun onSuccess() {
                successCallback.invoke("Payment Successful")
            }


        })
    }
}
