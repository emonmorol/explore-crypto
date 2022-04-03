import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CoinDetail.css";

const CoinDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/coins/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, [id]);
  console.log(detail);
  return (
    <div className="details-content">
      <div className="main-detail-content">
        <div>
          <h2>General Info</h2>
          <hr />
          <p>Coin Name : {detail.name}</p>
          <p>
            Market Cap Rank :{" "}
            {detail.market_cap_rank ? detail.market_cap_rank : "Not Available"}
          </p>
          <p>
            Origin :{" "}
            {detail.country_origin ? detail.country_origin : "Not Available"}
          </p>
          <p>
            Hashing Algorithm :{" "}
            {detail.hashing_algorithm
              ? detail.hashing_algorithm
              : "Not Available"}
          </p>
          <p>
            Genesis Date :{" "}
            {detail.genesis_date ? detail.genesis_date : "Not Available"}
          </p>
          <p>
            Last Updated :{" "}
            {detail.last_updated ? detail.last_updated : "Not Available"}
          </p>
        </div>
        <div>
          <h2>Scores</h2>
          <hr />
          <p>
            Community Score :{" "}
            {detail.community_score ? detail.community_score : "Not Available"}
          </p>
          <p>
            Developer Score :{" "}
            {detail.developer_score ? detail.developer_score : "Not Available"}
          </p>
          <p>
            Liquidity Score :{" "}
            {detail.liquidity_score ? detail.liquidity_score : "Not Available"}
          </p>
          <p>
            Public Interest Score :{" "}
            {detail.public_interest_score
              ? detail.public_interest_score
              : "Not Available"}
          </p>
        </div>
      </div>
      <div className="detail-image-content">
        <img src={detail.image?.large} alt="" />
      </div>
    </div>
  );
};

export default CoinDetail;
