import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCharacterById } from "../api/characters";

const Character = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCharacter = async () => {
      const data = await getCharacterById(id);
      setCharacter(data);
    };
    fetchCharacter();
  }, [id]);

  const handleBackClick = () => {
    navigate(-1);
  };
  const { origin } = character;
  const copiedObject = Object.assign({}, origin);
  const { name } = copiedObject;

  return (
    <section className="character">
      <div className="character__wrapper">
        <button className="character__btn" onClick={handleBackClick}>
          Back
        </button>

        <div className="character__image">
          <img src={character.image} alt={character.name} />
        </div>
        <h1 className="character__title">{character.name}</h1>
        <h4 className="character__informations">Informations</h4>
        <div className="character__card">
          <h6 className="character__card__title">Gender</h6>
          <p className="character__card__text">{character.gender}</p>
          <h6 className="character__card__title">Status</h6>
          <p className="character__card__text">{character.status}</p>
          <h6 className="character__card__title">Specie</h6>
          <p className="character__card__text">{character.species}</p>
          <h6 className="character__card__title">Origin</h6>
          <p className="character__card__text">{name}</p>
          <h6 className="character__card__title">Type</h6>
          <p className="character__card__text">{character.type}</p>
        </div>
      </div>
    </section>
  );
};

export default Character;
