import React from 'react';
import clsx from 'clsx';

import styles from './Coin.module.scss';

const Coin = ({ image, symbol, name, price, percent}) => {
  return (
    <li className={styles.coin}>
      <div className={styles.coin__header}>
        <img src={image} alt={name} />
        <div className={styles.coin__symbol}>{symbol}</div>
        <div className={styles.coin__name}>{name}</div>
      </div>
      <div className={styles.coin__stats}>
        <div className={styles.coin__price}>$ {price.toLocaleString()}</div>
        {percent < 0 ?
        (<div className={clsx(styles["coin__percent"], styles.coin__down)}>{percent.toFixed(2)} %</div>)
        :
        (<div className={clsx(styles["coin__percent"], styles.coin__up)}>{percent.toFixed(2)} %</div>)
        }
      </div>
    </li>
  )
}

export default Coin;
