import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Order } from '../../../types';
import { orders as givenOrders } from '../../api/data';

interface OrdersState {
  orders: Order[];
}

const initialState: OrdersState = {
  orders: givenOrders,
};

const orders = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.orders.push(action.payload);
    },

    deleteOrder: (state, action: PayloadAction<number>) => {
      state.orders = state.orders.filter(
        (order) => order.id !== action.payload,
      );
    },

    updateOrder: (state, action: PayloadAction<Order>) => {
      const updatedIndex = state.orders.findIndex(
        (order) => order.id === action.payload.id,
      );

      if (updatedIndex !== -1) {
        state.orders[updatedIndex] = action.payload;
      }
    },
  },
});

export const {
  addOrder,
  deleteOrder,
  updateOrder,
} = orders.actions;
export const ordersSlice = orders.reducer;
