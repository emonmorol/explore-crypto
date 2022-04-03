import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  const style = {
    display: "flex",
    width: "20%",
    textDecoration: "none",
    marginLeft: "10px",
    fontSize: "20px",
  };
  return (
    <div className="header-content">
      <div className="logo-content">
        <h2>Explore Crypto</h2>
      </div>
      <div className="link-content" style={style}>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/coins">Coins</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </div>
    </div>
  );
};

export default Header;
