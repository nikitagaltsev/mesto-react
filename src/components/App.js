import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();

  function handleCardClick(cardId) {
    setSelectedCard(cardId)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard('');
  }

  return (
    <div className="App">
      <div className="root">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        
        <Footer />

        <PopupWithForm isOpen={isEditProfilePopupOpen ? 'popup_is-opened' : ''} onClose={closeAllPopups} name="person" title="Редактировать профиль">
          <div className="input-container input-container_person">
            <input
              id="name"
              type="text"
              minLength="2"
              maxLength="30"
              name="name"
              className="popup__input popup__input_type_person-name"
              required
            />
            <span id="error-name" className="error-message"></span>
          </div>
          <div className="input-container input-container_person">
            <input
              id="about"
              type="text"
              minLength="2"
              maxLength="30"
              name="about"
              className="popup__input popup__input_type_about"
              required
            />
            <span id="error-about" className="error-message"></span>
          </div>
          <button
            type="button"
            className="button popup__button popup__button_person popup__button_active"
          >
            Сохранить
          </button>
        </PopupWithForm>

        <PopupWithForm isOpen={isAddPlacePopupOpen ? 'popup_is-opened' : ''} onClose={closeAllPopups}name="place" title="Новое место">
          <div className="input-container ">
            <input
              id="place"
              type="text"
              name="name"
              minLength="2"
              maxLength="30"
              className="popup__input popup__input_type_name"
              placeholder="Название"
              required
            />
            <span id="error-place" className="error-message"></span>
          </div>
          <div className="input-container">
            <input
              id="link"
              type="url"
              name="link"
              className="popup__input popup__input_type_link-url"
              placeholder="Ссылка на картинку"
              required
            />
            <span id="error-link" className="error-message"></span>
          </div>
          <button
            type="button"
            className="button popup__button popup__button_place"
          >
            +
          </button>
        </PopupWithForm>
        

        {/* <PopupWithForm /> */}

        <ImagePopup  isOpen={selectedCard ? 'popup_is-opened' : ''} card={selectedCard} onClose={closeAllPopups}/>
      </div>
    </div>
  );
}

export default App;
