import { Link } from "react-router-dom";
import React from "react";

const Card = ({ id, name, gender, image }) => {
  return (
    <li className="section__card">
      <Link key={name} to={`${id}`} className="section__link">
        <div className="section__card__imageBox">
          <img src={image} alt={name} className="section__card__image" />
        </div>
        <h6 className="section__card__title">{name}</h6>
        <p className="section__card__text">{gender}</p>
      </Link>
    </li>
  );
};

export default Card;
