import logo from "../images/logo.svg";
import { useLocation, Link } from "react-router-dom";

function Header({signOut, email}) {
  const location = useLocation();

  return (
    <header className="header">
      <img className="logo" src={logo} alt="логотип" />
      <div className="header__navigation">
        {location.pathname === "/" && <p className="header__text">{email}</p>}
        {location.pathname === "/sign-in" && <Link className="header__link opacity-button" to="/sign-up">Регистрация</Link>}
        {location.pathname === "/sign-up" && <Link className="header__link opacity-button" to="/sign-in">Войти</Link>}
        {location.pathname === "/" && <Link className="header__link opacity-button" to="/sign-in" onClick={signOut}>Выйти</Link>}
      </div>
    </header>
  );
}

export default Header;
