import React from "react";
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      buttonText="Сохранить"
      isOpen={props.isOpen ? "popup_is-opened" : ""}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      isSaving={props.isSaving}
    >
      <label className="input-container input-container_person">
          <input
            type="url"
            className="popup__input popup__input_type_person-name"
            name="avatar"
            id="avatar-input"
            required
            ref={avatarRef}
            placeholder="Ссылка на аватар"
          />
          <span id="avatar-error" className="error-message"></span>
        </label>
        <button
        className="button popup__button popup__button_person popup__button_active"
        type="submit"
      >
        Сохранить
      </button>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
