import { configureStore } from '@reduxjs/toolkit';
import cartStore from './CartStore/index';
import orderStore from './OrderStore';

const store = configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    reducer: {
        cartStore,
        orderStore
    },
});

export default store;