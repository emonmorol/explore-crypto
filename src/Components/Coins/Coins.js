import React, { useEffect, useState } from "react";
import SingleCoin from "../SingleCoin/SingleCoin";
import "./Coins.css";

const Coins = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => setCoins(data));
  }, []);

  return (
    <div className="total-coins-content">
      <div>
        <h1>Available Crypto Coins</h1>
        <a href="/home">Home</a>
        <small>Total Coins {coins.length}</small>
      </div>
      <div className="total-coin">
        {coins.map((coin) => (
          <SingleCoin key={coin.id} coin={coin}></SingleCoin>
        ))}
      </div>
    </div>
  );
};

export default Coins;
