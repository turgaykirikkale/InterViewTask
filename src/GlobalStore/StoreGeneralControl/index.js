import store from "../index";
import { AddToCart, AddItemToCart, DeleteItemFromCart, DeleteFromCart, ClearTheCart } from "../CartStore";
import { SetOrders } from "../OrderStore";

export const AddProductToCart = item => {
    store.dispatch(AddToCart(item));
}

export const AddProductItemToCart = (item) => {
    store.dispatch(AddItemToCart(item));
}

export const DeleteProductItemFromCart = item => {
    store.dispatch(DeleteItemFromCart(item));
}

export const DeleteProductFromCart = item => {
    store.dispatch(DeleteFromCart(item));
}

export const ClearAllItemFromCart = () => {
    store.dispatch(ClearTheCart());
}

export const FetchOrderHistory = (data) => {
    store.dispatch(SetOrders(data));
}