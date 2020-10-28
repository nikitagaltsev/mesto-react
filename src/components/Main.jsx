import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  /* Context */
  const currentUser = React.useContext(CurrentUserContext);

  if (!currentUser) {
    return (
      <section>
        <h1 className="profile__loading">Loading...</h1>
      </section>
    )
  }

  return (
    <main>
      <div className="profile root__section">
        <div className="user-info">
          <div
            onClick={props.onEditAvatar}
            className="user-info__photo"
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
          >
            {" "}
          </div>{" "}
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
          <Card cardData={item} key={index} onCardClick={props.onCardClick} onCardLike={props.onCardLike}/>
        ))}
      </ul>
    </main>
  );
}

export default Main;
