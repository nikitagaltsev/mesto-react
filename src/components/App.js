import React from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className="root">
        <Header/>
        <Main/>
        <Footer/>
        

        <div className="popup popup_person">
          <div className="popup__content">
            <img src="./images/close.svg" alt="" className="popup__close" />
            <h3 className="popup__title">Редактировать профиль</h3>
            <form className="popup__form" name="profile" noValidate>
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
            </form>
          </div>
        </div>

        <div className="popup popup_place">
          <div className="popup__content">
            <img src="./images/close.svg" alt="" className="popup__close" />
            <h3 className="popup__title">Новое место</h3>
            <form className="popup__form" name="place" noValidate>
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
            </form>
          </div>
        </div>

        <div className="popup popup_image">
          <div className="popup__image-container">
            <img src="./images/close.svg" alt="" className="popup__close" />
            <img className="popup__image-open" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
