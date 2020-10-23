import React from "react";
import closeBtn from "../images/close.svg";

function ImagePopup(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen}`}>
      <div className="popup__image-container">
        <img
          src={closeBtn}
          alt="Копка закрыть"
          className="popup__close"
          onClick={props.onClose}
        />
        <img className="popup__image-open" alt="" src={props.card}/>
      </div>
    </div>
  );
}

export default ImagePopup;
