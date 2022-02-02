import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleName(e) {
    setName(e.target.value);
  }

  function handleLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onCardAdd({
      name: name,
      link: link,
    });
  }

  return (
    <PopupWithForm
      title={"Новое место"}
      name={"popup-add"}
      buttonText={"Создать"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
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
        onChange={handleName}
      />
      <span id="citi-name-error" className="error"></span>
      <input
        id="city-link"
        className="popup__change-line link-new-place"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        required
        onChange={handleLink}
      />
      <span id="city-link-error" className="error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
