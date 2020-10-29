import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({ name, link });
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen ? "popup_is-opened" : ""}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name="place"
      title="Новое место"
    >
    <h2 style={{color: 'red'}}>Возможность добавлять карточки была заблокирована сервером :(</h2>
      <div className="input-container ">
        <input
          id="place"
          type="text"
          name="name"
          minLength="2"
          maxLength="30"
          className="popup__input popup__input_type_name"
          placeholder="Название"
          onChange={handleNameChange}
          disabled
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
          onChange={handleLinkChange}
          disabled
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
  );
}

export default AddPlacePopup;
