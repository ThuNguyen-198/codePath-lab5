import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const CoinInfo = ({ image, name, symbol }) => {
  const [price, setPrice] = useState(null);
  useEffect(() => {
    const getCoinPrice = async () => {
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/price?fsym=${symbol}}&tsyms=USD`
      );
      const json = response.json();
      setPrice(json);
    };
    getCoinPrice().catch(console.error);
  }, [symbol]);
  return (
    <div>
      {price ? (
        <li className="main-list" key={symbol}>
          <img
            className="icons"
            src={`https://www.cryptocompare.com${image}`}
            alt={`Small icon for ${name} crypto coin`}
          />
          <Link to={`/coinDetails/${symbol}`} key={symbol}>
            {name} <span className="tab"></span> ${price.USD} USD
          </Link>
        </li>
      ) : null}
    </div>
  );
};

export default CoinInfo;
