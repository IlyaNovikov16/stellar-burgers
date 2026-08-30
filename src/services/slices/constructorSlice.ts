import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { TConstructorIngredient, TIngredient } from '../../utils/types';

type TConstructorState = {
	bun: TConstructorIngredient | null;
	ingredients: TConstructorIngredient[];
};

const initialState: TConstructorState = {
	bun: null,
	ingredients: [],
};

export const constructorSlice = createSlice({
	name: 'burgerConstructor',
	initialState,
	reducers: {
		addIngredient: {
			reducer: (state, action: PayloadAction<TConstructorIngredient>) => {
				if (action.payload.type === 'bun') {
					state.bun = action.payload;
				} else {
					state.ingredients.push(action.payload);
				}
			},
			prepare: (ingredient: TIngredient) => ({
				payload: { ...ingredient, id: nanoid() },
			}),
		},
		removeIngredient: (state, action: PayloadAction<string>) => {
			state.ingredients = state.ingredients.filter(
				(item) => item.id !== action.payload
			);
		},
		moveIngredient: (
			state,
			action: PayloadAction<{ index: number; step: number }>
		) => {
			const { index, step } = action.payload;
			const targetIndex = index + step;
			if (targetIndex < 0 || targetIndex >= state.ingredients.length) return;
			const temp = state.ingredients[index];
			state.ingredients[index] = state.ingredients[targetIndex];
			state.ingredients[targetIndex] = temp;
		},
		clearConstructor: (state) => {
			state.bun = null;
			state.ingredients = [];
		},
	},
});

export const {
	addIngredient,
	removeIngredient,
	moveIngredient,
	clearConstructor,
} = constructorSlice.actions;

export default constructorSlice.reducer;