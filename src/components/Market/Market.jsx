import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Container from '../Container/Container';
import Coin from './Coin';

import styles from './Market.module.scss';

const Market = () => {
  const [listOfCoins, setListOfCoins] = useState([]);

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=16&page=1&sparkline=false")
    .then((response) => {
        setListOfCoins(response.data);
        console.log(response.data);
      }
    )
    .catch((error) => console.log(error))
  }, []);

  return (
    <div className={styles.market}>
      <Container>
        <h2>Market Trend</h2>
        <ul className={styles.coin__list}>
          {listOfCoins.map((coin) => {
            return <Coin
              key={coin.id}
              image={coin.image}
              symbol={coin.symbol}
              name={coin.name}
              price={coin.current_price}
              percent={coin.price_change_percentage_24h}
            />
          })}
        </ul>
      </Container>
    </div>
  )
}

export default Market;
