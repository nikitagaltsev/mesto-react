import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  /* Context */
  const currentUser = React.useContext(CurrentUserContext);

  if (!currentUser) {
    return (
      <section className="loading">
        <span className="profile__preloader"></span>
      </section>
    );
  }

  return (
    <main>
      <div className="profile root__section">
        <div className="user-info">

          <div className="profile__avatar-box">
            <img
              src={currentUser.avatar}
              alt="Фото профиля"
              className="profile__avatar button"
            />
            <button
              className="profile__avatar-btn button"
              type="button"
              onClick={props.onEditAvatar}
            ></button>
          </div>

          <div className="user-info__data">
            <h1 className="user-info__name"> {currentUser.name} </h1>{" "}
            <p className="user-info__job"> {currentUser.about} </p>{" "}
            <button
              onClick={props.onEditProfile}
              className="button user-info__edit-button"
              type="button"
            >
              Edit{" "}
            </button>{" "}
          </div>{" "}
          <button
            onClick={props.onAddPlace}
            className="button user-info__button"
          >
            {" "}
            +{" "}
          </button>{" "}
        </div>{" "}
      </div>

      <ul className="places-list root__section">
        {props.cards.map((item, index) => (
          <Card
            cardData={item}
            key={index}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onDeleteClick={props.onDeleteClick}
          />
        ))}
      </ul>
    </main>
  );
}

export default Main;
