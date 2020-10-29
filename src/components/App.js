import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from "./ImagePopup";
import AddPlacePopup from "./AddPlacePopup";
import ClosablePopup from "./ClosablePopup";
import api from "../utils/Api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  /** State */
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  //part two
  const [currentUser, setCurrentUser] = React.useState();
  const [cards, setCards] = React.useState([]);
  const [deletedCard, setDeletedCard] = React.useState({});
  const [isSaving, setIsSaving] = React.useState(false);
  /** Lifecycle methods */
  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cards]) => {
        setCurrentUser(user);
        setCards(cards.slice(0, 100));
      })
      .catch((err) => console.log(err));
  }, []);

  /** Handlers */
  function handleCardClick(cardId) {
    setSelectedCard(cardId);
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

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete() {
    setIsSaving(true);
    api
      .deleteCard(deletedCard._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== deletedCard._id);
        setCards(newCards);
      })
      .catch((err) => console.log(err))
      .finally(() => closeAllPopups());
  }

  function handleUpdateUser(user) {
    setIsSaving(true);
    console.log(user);
    api
      .editUserInfo(user)
      .then((user) => setCurrentUser(user))
      .catch((err) => console.log(err))
      .finally(() => closeAllPopups());
  }

  function handleUpdateAvatar(avatar) {
    setIsSaving(true);
    api
      .patchAvatar(avatar)
      .then((avatar) => setCurrentUser(avatar))
      .catch((err) => console.log(err))
      .finally(() => closeAllPopups());
  }

  function handleAddPlaceSubmit(card) {
    setIsSaving(true);
    api
      .addCard(card)
      .then((card) => setCards([card, ...cards]))
      .catch((err) => console.log(err))
      .finally(() => closeAllPopups());
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard("");
    setIsSaving(false);
  }

  return (
    <div className="App">
      <div className="root">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            cards={cards}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onDeleteClick={handleCardDelete}
          />

          <Footer />

          {isEditProfilePopupOpen ? (
            <ClosablePopup>
              <EditProfilePopup
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                onUpdateUser={handleUpdateUser}
                isSaving={isSaving}
              />
            </ClosablePopup>
          ) : (
            ""
          )}

          {isAddPlacePopupOpen ? (
            <ClosablePopup>
              <AddPlacePopup
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                onAddPlace={handleAddPlaceSubmit}
                isSaving={isSaving}
              />
            </ClosablePopup>
          ) : (
            ""
          )}

          {isEditAvatarPopupOpen ? (
            <ClosablePopup>
              <EditAvatarPopup
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                onUpdateAvatar={handleUpdateAvatar}
                isSaving={isSaving}
              />
            </ClosablePopup>
          ) : (
            ""
          )}

          {selectedCard.link ? (
            <ClosablePopup>
              <ImagePopup
                isOpen={selectedCard ? "popup_is-opened" : ""}
                card={selectedCard}
                onClose={closeAllPopups}
              />
            </ClosablePopup>
          ) : (
            ""
          )}
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
