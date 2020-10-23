import React from "react";

function Card(props) {
  const cardData = props.cardData;

  function handleClick() {
    props.onCardClick(cardData.link);
  }  

  return (
    <li className="place-card">
      <div
        className="place-card__image"
        style={{ backgroundImage: `url(${cardData.link})` }}
        onClick={handleClick}
      >
        <button className="place-card__delete-icon"> </button>
      </div>
      <div className="place-card__description">
        <h3 className="place-card__name">{cardData.name}</h3>
        <div className="place-card__like-container">
          <p className="place-card__like-counter">{cardData.likes.length}</p>
          <button className="place-card__like-icon"></button>
        </div>
      </div>
    </li>
  );
}

export default Card;
