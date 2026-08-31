import { useState, useMemo, useEffect, FC } from 'react';
import { useInView } from 'react-intersection-observer';
import { TIngredient, TTabMode } from '@utils-types';
import { BurgerIngredientsUI } from '@ui';
import { useAppSelector } from '../../services/store';

export const BurgerIngredients: FC = () => {
  const ingredients = useAppSelector(
    (state) => state.ingredients.ingredients
  );

  const buns = useMemo(
    () => ingredients.filter((item: TIngredient) => item.type === 'bun'),
    [ingredients]
  );

  const mains = useMemo(
    () => ingredients.filter((item: TIngredient) => item.type === 'main'),
    [ingredients]
  );

  const sauces = useMemo(
    () => ingredients.filter((item: TIngredient) => item.type === 'sauce'),
    [ingredients]
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
  }, [inViewBuns, inViewMains, inViewSauces]);

  const onTabClick = (tab: string) => {
    setCurrentTab(tab as TTabMode);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <BurgerIngredientsUI
      currentTab={currentTab}
      buns={buns}
      mains={mains}
      sauces={sauces}
      titleBunRef={bunsRef as any}
      titleMainRef={mainsRef as any}
      titleSaucesRef={saucesRef as any}
      bunsRef={bunsRef as any}
      mainsRef={mainsRef as any}
      saucesRef={saucesRef as any}
      onTabClick={onTabClick}
    />
  );
};