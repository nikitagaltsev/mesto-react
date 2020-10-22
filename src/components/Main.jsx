import React from "react";

function Main() {

  function handleEditAvatarClick() {

  }

  function handleEditProfileClick() {
    document.querySelector('.popup_person').classList.add('popup_is-opened');
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_place').classList.add('popup_is-opened');
  }

  function handleImageClick() {
    document.querySelector('.popup_image').classList.add('popup_is-opened');
  }


  return (
    <main>
      <div className="profile root__section">
        <div className="user-info">
          <div onClick={handleEditAvatarClick} className="user-info__photo"> </div>{" "}
          <div className="user-info__data">
            <h1 className="user-info__name"> Илон Маск </h1>{" "}
            <p className="user-info__job"> Изобретатель </p>{" "}
            <button onClick={handleEditProfileClick} className="button user-info__edit-button" type="button">
              Edit{" "}
            </button>{" "}
          </div>{" "}
          <button onClick={handleAddPlaceClick} className="button user-info__button"> + </button>{" "}
        </div>{" "}
      </div>

      <div className="places-list root__section">
        <template id="place-template">
          <div className="place-card">
            <div onClick={handleImageClick} className="place-card__image">
              <button className="place-card__delete-icon"> </button>{" "}
            </div>{" "}
            <div className="place-card__description">
              <h3 className="place-card__name"> </h3>{" "}
              <div className="place-card__like-container">
                <p className="place-card__like-counter"> </p>{" "}
                <button className="place-card__like-icon"> </button>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </template>{" "}
      </div>
    </main>
  );
}

export default Main;
