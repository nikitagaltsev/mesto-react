import React from "react";
import api from "../utils/Api.js";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cards]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(cards.slice(0, 5));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <div className="profile root__section">
        <div className="user-info">
          <div
            onClick={props.onEditAvatar}
            className="user-info__photo"
            style={{ backgroundImage: `url(${userAvatar})` }}
          >
            {" "}
          </div>{" "}
          <div className="user-info__data">
            <h1 className="user-info__name"> {userName} </h1>{" "}
            <p className="user-info__job"> {userDescription} </p>{" "}
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
        {cards.map((item, index) => 
          <Card cardData={item} key={index} />
        )}
      </ul>
    </main>
  );
}

export default Main;