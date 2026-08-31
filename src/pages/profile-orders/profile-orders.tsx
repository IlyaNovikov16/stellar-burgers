import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { fetchUserOrders } from '../../services/slices/feedSlice';
import { ProfileOrdersUI } from '../../components/ui/pages';

export const ProfileOrders = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector((state) => state.feed.userOrders);

  useEffect(() => {
    dispatch(fetchUserOrders());
  }, [dispatch]);

  return <ProfileOrdersUI orders={orders} />;
};
