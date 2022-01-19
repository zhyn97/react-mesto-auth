import trashImg from "../images/trash.svg";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="place">
      <img src={trashImg} className="place__trash opacity-button" />
      <img
        onClick={handleClick}
        src={props.link}
        alt={props.name}
        className="place__image"
      />
      <div className="place__name-area">
        <h2 className="place__title">{props.name}</h2>
        <button className="place__like opacity-button" type="button"></button>
        <p className="place__number-likes">{props.likes.length}</p>
      </div>
    </div>
  );
}

export default Card;
