import React from "react";
import "./logo.css";
const Logo = () => {
  const logoImg =
    "https://www.jiomart.com/assets/ds2web/images/Jiomart-logo-ds2.0.svg?v=24";
  return (
    <div className=" d-flex">
      <a href="/" className="logo">
        <img src={logoImg} alt="Jio mart" />
      </a>
    </div>
  );
};

export default Logo;
