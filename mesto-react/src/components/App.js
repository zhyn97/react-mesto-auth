import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState();
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState();
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState();
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="root">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <PopupWithForm
        title={"Редактировать профиль"}
        name={"popup-edit"}
        buttonText={"Сохранить"}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="name"
          className="popup__name popup__change-line"
          type="text"
          name="name"
          minLength="2"
          maxLength="40"
          placeholder="Имя"
          required
        />
        <span id="name-error" className="error"></span>
        <input
          id="occupation"
          className="popup__occupation popup__change-line"
          type="text"
          name="about"
          minLength="2"
          maxLength="200"
          placeholder="Занятие"
          required
        />
        <span id="occupation-error" className="error"></span>
      </PopupWithForm>

      <PopupWithForm
        title={"Новое место"}
        name={"popup-add"}
        buttonText={"Создать"}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="citi-name"
          className="popup__change-line name-new-place"
          type="text"
          name="name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
        />
        <span id="citi-name-error" className="error"></span>
        <input
          id="city-link"
          className="popup__change-line link-new-place"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span id="city-link-error" className="error"></span>
      </PopupWithForm>

      <PopupWithForm
        title={"Вы уверены?"}
        name={"popup_delete-card"}
        buttonText={"Да"}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        title={"Обновить аватар"}
        name={"popup-avatar"}
        buttonText={"Сохранить"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="avatar-link"
          className="popup__change-line avatar-link"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span id="avatar-link-error" className="error"></span>
      </PopupWithForm>
    </div>
  );
}

export default App;
