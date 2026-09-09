import { FC, memo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { BurgerIngredientUI } from '@ui';
import { TBurgerIngredientProps } from './type';
import { useDispatch } from 'react-redux';
import { addIngredient } from '../../services/slices/constructorSlice';

export const BurgerIngredient: FC<TBurgerIngredientProps> = memo(
  ({ ingredient, count }) => {
    const location = useLocation();
    const dispatch = useDispatch();

    const handleAdd = () => {
      dispatch(addIngredient(ingredient));
    };

    return (
      <div 
        data-testid='ingredient-item'
        draggable
        onDragStart={(e) => {
          e.dataTransfer.setData('application/json', JSON.stringify(ingredient));
        }}
      >
        <Link
          to={`/ingredients/${ingredient._id}`}
          state={{ background: location }}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <BurgerIngredientUI
            ingredient={ingredient}
            count={count}
            locationState={{ background: location }}
            handleAdd={handleAdd}
          />
        </Link>
      </div>
    );
  }
);