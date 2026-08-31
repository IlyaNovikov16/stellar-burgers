import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { orderBurgerApi } from '../../utils/burger-api';
import { TOrder } from '@utils-types';

export const orderBurger = createAsyncThunk<TOrder, string[]>(
  'order/orderBurger',
  async (ingredients) => {
    const data = await orderBurgerApi(ingredients);
    return data.order as unknown as TOrder;
  }
);

interface IOrderState {
  orderModalData: TOrder | null;
  orderRequest: boolean;
  error: string | null;
}

const initialState: IOrderState = {
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
      .addCase(orderBurger.fulfilled, (state, action) => {
        state.orderRequest = false;
        state.orderModalData = action.payload;
      })
      .addCase(orderBurger.rejected, (state, action) => {
        state.orderRequest = false;
        state.error = action.error.message || 'Ошибка создания заказа';
      });
  }
});

export const { clearOrder } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
export default orderSlice.reducer;