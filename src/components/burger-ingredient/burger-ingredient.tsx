import { FC, memo } from 'react';
import { useLocation } from 'react-router-dom';
import { TIngredient } from '@utils-types';
import { BurgerIngredientUI } from '@ui';
import { useAppDispatch } from '../../services/store';
import { addIngredient } from '../../services/slices/constructorSlice';

interface TBurgerIngredientProps {
  ingredient: TIngredient;
  count: number;
}

export const BurgerIngredient: FC<TBurgerIngredientProps> = memo(
  ({ ingredient, count }) => {
    const location = useLocation();
    const dispatch = useAppDispatch();

    const handleAdd = () => {
      dispatch(addIngredient(ingredient));
    };

    return (
      <BurgerIngredientUI
        ingredient={ingredient}
        count={count}
        locationState={{ background: location }}
        handleAdd={handleAdd}
      />
    );
  }
);
