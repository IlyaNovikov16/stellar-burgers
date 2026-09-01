import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getOrderByNumberApi, orderBurgerApi } from '../../utils/burger-api';
import { TOrder } from '@utils-types';

export const orderBurger = createAsyncThunk<TOrder, string[]>(
  'order/orderBurger',
  async (ingredients) => {
    const data = await orderBurgerApi(ingredients);
    return data.order as unknown as TOrder;
  }
);

export const getOrderByNumber = createAsyncThunk<TOrder, number>(
  'order/getOrderByNumber',
  async (number) => {
    const data = await getOrderByNumberApi(number);
    return data.orders[0];
  }
);

interface IOrderState {
  orderModalData: TOrder | null;
  orderByNumberData: TOrder | null;
  orderRequest: boolean;
  error: string | null;
}

const initialState: IOrderState = {
  orderModalData: null,
  orderByNumberData: null,
  orderRequest: false,
  error: null
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    clearOrder: (state) => {
      state.orderModalData = null;
    },
    clearOrderByNumber: (state) => {
      state.orderByNumberData = null;
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
      })
      .addCase(getOrderByNumber.pending, (state) => {
        state.orderByNumberData = null;
        state.orderRequest = true;
      })
      .addCase(getOrderByNumber.fulfilled, (state, action) => {
        state.orderRequest = false;
        state.orderByNumberData = action.payload;
      })
      .addCase(getOrderByNumber.rejected, (state, action) => {
        state.orderRequest = false;
        state.error = action.error.message || 'Ошибка получения заказа';
      });
  }
});

export const { clearOrder, clearOrderByNumber } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
export default orderSlice.reducer;
