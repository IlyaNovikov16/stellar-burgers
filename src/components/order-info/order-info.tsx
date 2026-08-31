import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Preloader } from '../ui/preloader';
import { OrderInfoUI } from '../ui/order-info';
import { TIngredient, TOrder } from '@utils-types';
import { useAppSelector } from '../../services/store';

export const OrderInfo: FC = () => {
  const { number } = useParams<{ number: string }>();

  const ingredients: TIngredient[] = useAppSelector(
    (state) => state.ingredients.ingredients
  );

  const orderData = useAppSelector((state) => {
    if (!number) return null;
    const orderNum = Number(number);

    // Ищем заказ в ленте заказов (feed)
    const feedOrder = state.feed.orders.find(
      (item: TOrder) => item.number === orderNum
    );
    if (feedOrder) return feedOrder;

    // Если открыт модальный заказ после создания
    if (state.order.orderModalData?.number === orderNum) {
      return state.order.orderModalData;
    }

    return null;
  });

  /* Готовим данные для отображения */
  const orderInfo = useMemo(() => {
    if (!orderData || !ingredients.length) return null;

    const date = new Date(orderData.createdAt);

    type TIngredientsWithCount = {
      [key: string]: TIngredient & { count: number };
    };

    const ingredientsInfo = orderData.ingredients.reduce(
      (acc: TIngredientsWithCount, item: string) => {
        if (!acc[item]) {
          const ingredient = ingredients.find(
            (ing: TIngredient) => ing._id === item
          );
          if (ingredient) {
            acc[item] = {
              ...ingredient,
              count: 1
            };
          }
        } else {
          acc[item].count++;
        }

        return acc;
      },
      {}
    );

    const total = (
      Object.values(ingredientsInfo) as Array<TIngredient & { count: number }>
    ).reduce(
      (acc: number, item: TIngredient & { count: number }) =>
        acc + item.price * item.count,
      0
    );

    return {
      ...orderData,
      ingredientsInfo,
      date,
      total
    };
  }, [orderData, ingredients]);

  if (!orderInfo) {
    return <Preloader />;
  }

  return <OrderInfoUI orderInfo={orderInfo} />;
};
