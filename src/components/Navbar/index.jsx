import { NavLink } from "react-router-dom";
import Logo from "../../assets/LOGO.png";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="header">
      <NavLink className="logo" to="/">
        <img src={Logo} alt="Kasa_Logo" />
      </NavLink>
      <div className="header__links">
        <NavLink className="header__link" to="/">
          Accueil
        </NavLink>
        <NavLink className="header__link" to="/about">
          À propos
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;
