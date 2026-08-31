import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';
import { orderBurgerApi } from '@api';

export const orderBurger = createAsyncThunk(
  'order/orderBurger',
  async (data: string[]) => {
    const response = await orderBurgerApi(data);
    return response;
  }
);

interface TOrderState {
  orderModalData: TOrder | null;
  orderRequest: boolean;
  error: string | null;
}

export const initialState: TOrderState = {
  orderModalData: null,
  orderRequest: false,
  error: null
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    clearOrder: (state) => {
      state.orderModalData = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(orderBurger.pending, (state) => {
        state.orderRequest = true;
        state.error = null;
      })
      .addCase(orderBurger.rejected, (state, action) => {
        state.orderRequest = false;
        state.error = action.error.message || 'Ошибка создания заказа';
      })
      .addCase(orderBurger.fulfilled, (state, action) => {
        state.orderRequest = false;
        state.orderModalData = action.payload.order as unknown as TOrder;
      });
  }
});

export const { clearOrder } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
