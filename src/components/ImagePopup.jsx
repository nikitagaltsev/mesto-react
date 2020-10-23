import React from "react";
import closeBtn from '../images/close.svg'

function ImagePopup() {
  return (
    <div className="popup popup_image">
      <div className="popup__image-container">
      <img src={closeBtn} alt="Копка закрыть" className="popup__close" />
        <img className="popup__image-open" alt="" />
      </div>
    </div>
  );
}

export default ImagePopup;
