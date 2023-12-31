import { configureStore } from '@reduxjs/toolkit';
import { ordersSlice, productsSlice, selectedOrderSlice } from './features';

export const store = configureStore({
  reducer: {
    selectedOrder: selectedOrderSlice,
    orders: ordersSlice,
    products: productsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
