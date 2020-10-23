import React, { Component } from "react";

function Card(props) {
  const cardData = props.cardData
  return (
    <li
      className="place-card"
      style={{ backgroundImage: `url(${cardData.link})` }}
    >
      <div onClick={props.onImageClick} className="place-card__image">
        <button className="place-card__delete-icon"> </button>
      </div>
      <div className="place-card__description">
        <h3 className="place-card__name">{cardData.name}</h3>
        <div className="place-card__like-container">
          <p className="place-card__like-counter">
            {/* {cardData.likes.length} */}
          </p>
          <button className="place-card__like-icon"> </button>
        </div>
      </div>
    </li>
  );
}

export default Card;
