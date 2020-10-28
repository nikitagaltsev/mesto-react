import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); 

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    console.log(e);
    props.onUpdateUser({
      name,
      about: description,
    });
  } 

return (
    <PopupWithForm
      isOpen={props.isOpen ? "popup_is-opened" : ""}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      isSaving={props.isSaving}
      name="person"
      title="Редактировать профиль"
    >
      <div className="input-container input-container_person">
        <input
          id="name"
          type="text"
          minLength="2"
          maxLength="30"
          name="name"
          className="popup__input popup__input_type_person-name"
          value={name}
          onChange={handleNameChange}
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
          value={description}
          onChange={handleDescriptionChange}
          required
        />
        <span id="error-about" className="error-message"></span>
      </div>
      <button
        className="button popup__button popup__button_person popup__button_active"
        type="submit"
      >
        Сохранить
      </button>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
