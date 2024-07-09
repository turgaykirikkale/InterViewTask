import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getDocs, query, addDoc } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDDnq0he6I8RTPE3lwRxiOuadNp7XuLa3U",
    authDomain: "interviewtask-ff0b7.firebaseapp.com",
    projectId: "interviewtask-ff0b7",
    storageBucket: "interviewtask-ff0b7.appspot.com",
    messagingSenderId: "865490533473",
    appId: "1:865490533473:web:52d2f8ef4e31c5788abe20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const productsRef = collection(db, "products");
const orderHistoryRef = collection(db, "orderHistory");

const services = {
    FetchProductsData: async () => {
        const snapshot = await getDocs(query(productsRef));
        const updatedData = snapshot.docs.map(doc => ({ ...doc.data() }));
        return updatedData;
    },

    FetchOrderHistory: async () => {
        const snapshot = await getDocs(query(orderHistoryRef));
        const updatedData = snapshot.docs.map(doc => ({ ...doc.data() }));
        return updatedData;
    },

    AddOrderToHistory: (data) => {
        addDoc(orderHistoryRef, data);
    }
}

export default services;