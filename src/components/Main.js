import React from "react";

import Card from "./Card";
import api from "../utils/api";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  function handleRequest() {
    api
      .getUserData()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err));
  }

  function getCards() {
    api
      .getCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }

  React.useEffect(() => {
    handleRequest();
  }, []);

  React.useEffect(() => {
    getCards();
  }, []);

  return (
    <main>
      <section className="profile">
        <div onClick={props.onEditAvatar} className="profile__avatar">
          <img className="profile__edit-view" src={userAvatar} />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            onClick={props.onEditProfile}
            className="profile__edit-button opacity-button"
            type="button"
          ></button>
          <p className="profile__occupation">{userDescription}</p>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__add-button opacity-button"
          type="button"
        ></button>
      </section>
      <section className="places">
        {cards.map((item) => (
          <Card
            key={item._id}
            {...item}
            card={item}
            onCardClick={props.onCardClick}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
