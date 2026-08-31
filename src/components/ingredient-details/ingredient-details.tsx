import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { TIngredient } from '@utils-types';
import { IngredientDetailsUI, Preloader } from '@ui';
import { useAppSelector } from '../../services/store';

export const IngredientDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const ingredients = useAppSelector((state) => state.ingredients.ingredients);

  const ingredientData = ingredients.find(
    (item: TIngredient) => item._id === id
  );

  if (!ingredientData) {
    return <Preloader />;
  }

  return <IngredientDetailsUI ingredientData={ingredientData} />;
};
