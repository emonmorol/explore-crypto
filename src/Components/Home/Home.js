import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-content">
      <div>
        <h1>You Are Welcomed To Explore Crypto</h1>
        <Link to="/coins" className="explore-button">
          Explore Coins
        </Link>
      </div>
    </div>
  );
};

export default Home;
