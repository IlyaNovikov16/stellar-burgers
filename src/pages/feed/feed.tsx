import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { fetchFeeds } from '../../services/slices/feedSlice';
import { FeedUI } from '../../components/ui/pages';
import { Preloader } from '../../components/ui/preloader';

export const Feed = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector((state) => state.feed.orders);

  useEffect(() => {
    dispatch(fetchFeeds());
  }, [dispatch]);

  if (!orders.length) {
    return <Preloader />;
  }

  return (
    <FeedUI orders={orders} handleGetFeeds={() => dispatch(fetchFeeds())} />
  );
};
