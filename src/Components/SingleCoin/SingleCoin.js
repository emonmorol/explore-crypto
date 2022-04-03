import React from "react";
import { Link } from "react-router-dom";
import "./SingleCoin.css";

const SingleCoin = ({ coin }) => {
  const { image, name, symbol, id } = coin;
  return (
    <Link className="anchors" to={`/coin-details/${id}`}>
      <div className="coin-card">
        <div className="image-content">
          <img className="image" src={image} alt="" />
        </div>
        <div className="card-details">
          <h4>{name}</h4>
          <h6>{symbol}</h6>
        </div>
      </div>
    </Link>
  );
};

export default SingleCoin;
