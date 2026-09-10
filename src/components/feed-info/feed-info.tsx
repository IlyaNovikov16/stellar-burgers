import { FC } from 'react';
import { TOrder } from '@utils-types';
import { FeedInfoUI } from '@ui';
import { useAppSelector } from '../../services/store';

export const FeedInfo: FC = () => {
  const { orders, total, totalToday } = useAppSelector((state) => state.feed);

  const readyOrders = orders
    .filter((order: TOrder) => order.status === 'done')
    .map((order: TOrder) => order.number)
    .slice(0, 20);

  const pendingOrders = orders
    .filter((order: TOrder) => order.status === 'pending')
    .map((order: TOrder) => order.number)
    .slice(0, 20);

  return (
    <FeedInfoUI
      readyOrders={readyOrders}
      pendingOrders={pendingOrders}
      feed={{ total, totalToday }}
    />
  );
};
