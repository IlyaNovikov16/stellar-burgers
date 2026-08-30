import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { orderBurgerApi, getOrderByNumberApi } from '../../utils/burger-api';
import { TOrder } from '../../utils/types';

export const createOrder = createAsyncThunk(
	'order/createOrder',
	async (ingredientIds: string[]) => {
		const res = await orderBurgerApi(ingredientIds);
		return res.order;
	}
);

export const fetchOrderByNumber = createAsyncThunk(
	'order/fetchByNumber',
	async (number: number) => {
		const res = await getOrderByNumberApi(number);
		return res.orders[0];
	}
);

type TOrderState = {
	orderRequest: boolean;
	orderModalData: TOrder | null;
	orderInfo: TOrder | null;
	error: string | null;
};

const initialState: TOrderState = {
	orderRequest: false,
	orderModalData: null,
	orderInfo: null,
	error: null,
};

export const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		clearOrderModalData: (state) => {
			state.orderModalData = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(createOrder.pending, (state) => {
				state.orderRequest = true;
			})
			.addCase(createOrder.fulfilled, (state, action) => {
				state.orderRequest = false;
				state.orderModalData = action.payload;
			})
			.addCase(createOrder.rejected, (state, action) => {
				state.orderRequest = false;
				state.error = action.error.message || 'Ошибка оформления заказа';
			})
			.addCase(fetchOrderByNumber.fulfilled, (state, action) => {
				state.orderInfo = action.payload;
			});
	},
});

export const { clearOrderModalData } = orderSlice.actions;
export default orderSlice.reducer;