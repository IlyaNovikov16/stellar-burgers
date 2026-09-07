import reducer, {
  addIngredient,
  removeIngredient,
  moveIngredient,
  clearConstructor
} from './constructorSlice';

jest.mock('@reduxjs/toolkit', () => ({
  ...jest.requireActual('@reduxjs/toolkit'),
  nanoid: () => 'test-id'
}));

const mockBun = {
  _id: '60d3b41abdacab0026a733c6',
  name: 'Краторная булка N-200i',
  type: 'bun',
  proteins: 80,
  fat: 24,
  carbohydrates: 53,
  calories: 420,
  price: 1255,
  image: 'https://code.s3.yandex.net/react/code/bun-02.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
  __v: 0
};

const mockIngredient = {
  _id: '60d3b41abdacab0026a733ce',
  name: 'Соус традиционный галактический',
  type: 'sauce',
  proteins: 42,
  fat: 24,
  carbohydrates: 42,
  calories: 99,
  price: 15,
  image: 'https://code.s3.yandex.net/react/code/sauce-03.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/sauce-03-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/sauce-03-large.png',
  __v: 0
};

describe('constructorSlice', () => {
  const initialState = {
    bun: null,
    ingredients: []
  };

  it('should handle unknown action', () => {
    expect(reducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual(initialState);
  });

  it('should handle addIngredient with bun', () => {
    const action = addIngredient(mockBun);
    const state = reducer(initialState, action);
    expect(state.bun).toEqual({ ...mockBun, id: 'test-id' });
  });

  it('should handle addIngredient with filling', () => {
    const action = addIngredient(mockIngredient);
    const state = reducer(initialState, action);
    expect(state.ingredients).toHaveLength(1);
    expect(state.ingredients[0]).toEqual({ ...mockIngredient, id: 'test-id' });
  });

  it('should handle removeIngredient', () => {
    const stateWithIngredient = {
      bun: null,
      ingredients: [{ ...mockIngredient, id: 'test-id' }]
    };
    const action = removeIngredient('test-id');
    const state = reducer(stateWithIngredient, action);
    expect(state.ingredients).toHaveLength(0);
  });

  it('should handle moveIngredient', () => {
    const stateWithIngredients = {
      bun: null,
      ingredients: [
        { ...mockIngredient, id: '1' },
        { ...mockIngredient, id: '2', name: 'Other' }
      ]
    };
    const action = moveIngredient({ index: 0, step: 1 });
    const state = reducer(stateWithIngredients, action);
    expect(state.ingredients[0].id).toBe('2');
    expect(state.ingredients[1].id).toBe('1');
  });

  it('should handle clearConstructor', () => {
    const filledState = {
      bun: { ...mockBun, id: 'test-id' },
      ingredients: [{ ...mockIngredient, id: 'test-id' }]
    };
    const action = clearConstructor();
    const state = reducer(filledState, action);
    expect(state).toEqual(initialState);
  });
});