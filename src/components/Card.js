import trashImg from "../images/trash.svg";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = props.owner._id === currentUser._id;
  const isLiked = props.likes.some(i => i._id === currentUser._id);

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick(){
    props.onCardDelete(props.card);
  }

  return (
    <div className="place">
      <img alt="иконка удаления" onClick={handleDeleteClick} src={trashImg} className={`${isOwn ? 'place__trash_active' : 'place__trash_hidden'} opacity-button`} />
      <img
        onClick={handleClick}
        src={props.link}
        alt={props.name}
        className="place__image"
      />
      <div className="place__name-area">
        <h2 className="place__title">{props.name}</h2>
        <button onClick={handleLikeClick} className={`${isLiked ? 'place__like place__like_active' : 'place__like'} opacity-button`} type="button"></button>
        <p className="place__number-likes">{props.likes.length}</p>
      </div>
    </div>
  );
}

export default Card;
