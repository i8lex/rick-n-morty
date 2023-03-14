import logo from "../images/logo.png";
import React from "react";

const Logo = () => {
  return (
    <div className="section__logo">
      <img
        className="section__logo__image"
        src={logo}
        alt="Logo Rick and Morty"
      />
    </div>
  );
};

export default Logo;
