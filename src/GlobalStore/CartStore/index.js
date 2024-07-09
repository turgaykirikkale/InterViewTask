import { createSlice } from '@reduxjs/toolkit';
import _ from "lodash";

const initialState = {
    products: [],
};

const cart = createSlice({

    name: "cart",
    initialState,
    reducers: {
        AddToCart: (state, action) => {
            action.payload.count = 1;
            let flag = false;
            _.each(state.products, (item, index) => {
                if (
                    action.payload.productId === item.productId

                ) {
                    state.products[index].count =
                        state.products[index].count + action.payload.count;
                    flag = true;
                }
            });
            if (flag) {
            } else {
                state.products = [action.payload, ...state.products];
            }

        },
        AddItemToCart: (state, action) => {
            _.each(state.products, (item) => {
                if (
                    action.payload.productId === item.productId

                ) {

                    item.count = item.count + 1;

                }
            })
        },
        DeleteItemFromCart: (state, action) => {
            _.each(state.products, (item) => {
                if (
                    action.payload.productId === item.productId

                ) {
                    if (item.count != 1) {
                        item.count = item.count - 1;
                    }
                }
            })
        },
        DeleteFromCart: (state, action) => {
            const updatedArray = _.reject(state.products, { productId: action.payload.productId });
            state.products = updatedArray;

        },
        ClearTheCart: (state, action) => {
            state.products = [];
        }
    }
})

export const {

    AddToCart,
    AddItemToCart,
    DeleteItemFromCart,
    DeleteFromCart,
    ClearTheCart
} = cart.actions;

export default cart.reducer;