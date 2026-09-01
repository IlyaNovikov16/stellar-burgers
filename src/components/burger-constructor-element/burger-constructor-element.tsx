import { FC, memo } from 'react';
import { BurgerConstructorElementUI } from '@ui';
import { BurgerConstructorElementProps } from './type';
import { useAppDispatch } from '../../services/store';
import {
  removeIngredient,
  moveIngredient
} from '../../services/slices/constructorSlice';

export const BurgerConstructorElement: FC<BurgerConstructorElementProps> = memo(
  ({ ingredient, index, totalItems }) => {
    const dispatch = useAppDispatch();

    const handleClose = () => {
      dispatch(removeIngredient(ingredient.id));
    };

    const handleMoveDown = () => {
      dispatch(moveIngredient({ index, step: 1 }));
    };

    const handleMoveUp = () => {
      dispatch(moveIngredient({ index, step: -1 }));
    };

    return (
      <BurgerConstructorElementUI
        ingredient={ingredient}
        index={index}
        totalItems={totalItems}
        handleClose={handleClose}
        handleMoveUp={handleMoveUp}
        handleMoveDown={handleMoveDown}
      />
    );
  }
);
