import { FC, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TIngredient, TOrder } from '@utils-types';
import { OrderInfoUI, Preloader } from '@ui';
import { useAppSelector } from '../../services/store';
import { getOrderByNumberApi } from '../../utils/burger-api';

export const OrderInfo: FC = () => {
  const { number } = useParams<{ number: string }>();
  const [orderData, setOrderData] = useState<TOrder | null>(null);

  const ingredients = useAppSelector(
    (state) => state.ingredients.ingredients
  );

  const orders = useAppSelector((state) => state.feed.orders);
  const userOrders = useAppSelector((state) => state.feed.userOrders);
  const modalOrder = useAppSelector((state) => state.order.orderModalData);

  useEffect(() => {
    if (!number) return;
    const num = Number(number);

    const foundOrder =
      orders.find((item: TOrder) => item.number === num) ||
      userOrders.find((item: TOrder) => item.number === num) ||
      (modalOrder?.number === num ? modalOrder : null);

    if (foundOrder) {
      setOrderData(foundOrder);
    } else {
      getOrderByNumberApi(num)
        .then((data) => {
          if (data.orders && data.orders.length > 0) {
            setOrderData(data.orders[0]);
          }
        })
        .catch((err) => console.error(err));
    }
  }, [number, orders, userOrders, modalOrder]);

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

    const total = Object.values(ingredientsInfo).reduce(
      (acc, item) => acc + item.price * item.count,
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