import React, { FC, memo } from 'react';
import {
  CurrencyIcon,
  FormattedDate
} from '@zlden/react-developer-burger-ui-components';
import styles from './order-info.module.css';
import { OrderInfoUIProps } from './type';
import { OrderStatus } from '@components';

export const OrderInfoUI: FC<OrderInfoUIProps> = memo(({ orderInfo }) => (
  <div className={styles.wrap}>
    <p className={styles.number}>#{orderInfo.number}</p>
    <h3 className={`text text_type_main-medium mt-10 mb-3 ${styles.header}`}>
      {orderInfo.name}
    </h3>
    <OrderStatus status={orderInfo.status} />
    <p className='text text_type_main-medium mt-10 mb-6'>Состав:</p>
    <ul className={`${styles.list} mb-10`}>
      {Object.values(orderInfo.ingredientsInfo).map((item, index) => (
        <li className={styles.item} key={index}>
          <div className={styles.img_wrap}>
            <div
              className={styles.border}
              style={{ backgroundImage: `url(${item.image})` }}
            />
          </div>
          <p className='text text_type_main-default'>{item.name}</p>
          <div className={styles.cost}>
            <p className='text text_type_digits-default mr-2'>
              {item.count} x {item.price}
            </p>
            <CurrencyIcon type='primary' />
          </div>
        </li>
      ))}
    </ul>
    <div className={styles.bottom}>
      <p className='text text_type_main-default text_color_inactive'>
        <FormattedDate date={orderInfo.date} />
      </p>
      <div className={styles.cost}>
        <p className='text text_type_digits-default mr-2'>{orderInfo.total}</p>
        <CurrencyIcon type='primary' />
      </div>
    </div>
  </div>
));
