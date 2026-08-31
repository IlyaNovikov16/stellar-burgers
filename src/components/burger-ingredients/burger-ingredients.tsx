import { useState, useEffect, FC } from 'react';
import { useInView } from 'react-intersection-observer';
import { TIngredient, TTabMode } from '@utils-types';
import { BurgerIngredientsUI } from '@ui';
import { useAppSelector } from '../../services/store';

export const BurgerIngredients: FC = () => {
  const ingredients: TIngredient[] = useAppSelector(
    (state) => state.ingredients.ingredients
  );

  const buns: TIngredient[] = ingredients.filter(
    (item: TIngredient) => item.type === 'bun'
  );
  const mains: TIngredient[] = ingredients.filter(
    (item: TIngredient) => item.type === 'main'
  );
  const sauces: TIngredient[] = ingredients.filter(
    (item: TIngredient) => item.type === 'sauce'
  );

  const [currentTab, setCurrentTab] = useState<TTabMode>('bun');

  const [bunsRef, inViewBuns] = useInView({ threshold: 0 });
  const [mainsRef, inViewMains] = useInView({ threshold: 0 });
  const [saucesRef, inViewSauces] = useInView({ threshold: 0 });

  useEffect(() => {
    if (inViewBuns) {
      setCurrentTab('bun');
    } else if (inViewSauces) {
      setCurrentTab('sauce');
    } else if (inViewMains) {
      setCurrentTab('main');
    }
  }, [inViewBuns, inViewSauces, inViewMains]);

  const onTabClick = (tab: string) => {
    setCurrentTab(tab as TTabMode);
    const element = document.getElementById(tab);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  console.log('INGREDIENTS:', ingredients);
  return (
    <BurgerIngredientsUI
      currentTab={currentTab}
      buns={buns}
      mains={mains}
      sauces={sauces}
      bunsRef={bunsRef as any}
      mainsRef={mainsRef as any}
      saucesRef={saucesRef as any}
      titleBunRef={bunsRef as any}
      titleMainRef={mainsRef as any}
      titleSaucesRef={saucesRef as any}
      onTabClick={onTabClick}
    />
  );
};
