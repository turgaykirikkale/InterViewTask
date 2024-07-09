import { createSlice } from '@reduxjs/toolkit';
import _ from "lodash";


const initialState = {
    orderHistory: [],
    error: null,
};

const orders = createSlice({

    name: "order",
    initialState,
    reducers: {
        SetOrders:  (state, action) => {
          state.orderHistory= action.payload;
        },
    }
})

export const {
    GetOrders,
    SetOrders
} = orders.actions;

export default orders.reducer;