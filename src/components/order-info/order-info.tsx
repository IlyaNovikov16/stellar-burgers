import { FC, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { OrderInfoUI, Preloader } from '@ui';
import { TIngredient, TOrder } from '@utils-types';
import { useAppDispatch, useAppSelector } from '../../services/store';
import {
  getOrderByNumber,
  clearOrderByNumber
} from '../../services/slices/orderSlice';

export const OrderInfo: FC = () => {
  const { number } = useParams<{ number: string }>();
  const dispatch = useAppDispatch();

  const ingredients = useAppSelector((state) => state.ingredients.ingredients);
  const feedOrders = useAppSelector((state) => state.feed.orders);
  const userOrders = useAppSelector((state) => state.feed.userOrders);
  const orderByNumberData = useAppSelector(
    (state) => state.order.orderByNumberData
  );

  const orderData: TOrder | undefined = useMemo(() => {
    const num = Number(number);
    if (!num) return undefined;
    return (
      feedOrders.find((item) => item.number === num) ||
      userOrders.find((item) => item.number === num) ||
      (orderByNumberData?.number === num ? orderByNumberData : undefined)
    );
  }, [number, feedOrders, userOrders, orderByNumberData]);

  useEffect(() => {
    const num = Number(number);
    if (num && !orderData) {
      dispatch(getOrderByNumber(num));
    }
    return () => {
      dispatch(clearOrderByNumber());
    };
  }, [dispatch, number, orderData]);

  const ingredientsInfo = useMemo(() => {
    if (!orderData || !ingredients.length) return {};

    return orderData.ingredients.reduce(
      (acc: { [key: string]: TIngredient & { count: number } }, id) => {
        const ingredient = ingredients.find((item) => item._id === id);
        if (ingredient) {
          if (!acc[id]) {
            acc[id] = { ...ingredient, count: 1 };
          } else {
            acc[id].count++;
          }
        }
        return acc;
      },
      {}
    );
  }, [orderData, ingredients]);

  const total = useMemo(
    () =>
      Object.values(ingredientsInfo).reduce(
        (acc, item) => acc + item.price * item.count,
        0
      ),
    [ingredientsInfo]
  );

  if (!orderData) {
    return <Preloader />;
  }

  const date = new Date(orderData.createdAt);

  return (
    <OrderInfoUI
      orderInfo={{
        ...orderData,
        ingredientsInfo,
        date,
        total
      }}
    />
  );
};
