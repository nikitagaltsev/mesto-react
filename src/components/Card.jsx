import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  console.log(props)
  const currentUser = React.useContext(CurrentUserContext);
  const cardData = props.cardData;
  const isOwn = props.cardData.owner._id === currentUser._id;
  const isLiked = props.cardData.likes.some(i => i._id === currentUser._id);
  
  const cardDeleteButtonClassName = (
    `.place-card__delete-icon ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
  ); 

  const cardLikeButtonClassName = `place-card__like-icon ${isLiked ? 'place-card__like-icon_liked' : 'place-card__like-icon_unliked'}`; 

  
  function handleClick() {
    props.onCardClick(cardData.link);
  }

  function handleLike() {
    props.onCardLike(cardData)
  }

  return (
    <li className="place-card">
      <div
        className="place-card__image"
        style={{ backgroundImage: `url(${cardData.link})` }}
        onClick={handleClick}
      >
        <button className={cardDeleteButtonClassName}> </button>
      </div>
      <div className="place-card__description">
        <h3 className="place-card__name">{cardData.name}</h3>
        <div className="place-card__like-container">
          <p className="place-card__like-counter">{cardData.likes.length}</p>
          <button className={cardLikeButtonClassName} onClick={handleLike}></button>
        </div>
      </div>
    </li>
  );
}

export default Card;
