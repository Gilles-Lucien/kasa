import { Link } from "react-router-dom";
import Logo from "../../assets/LOGO.png";
import "./Navbar.css";
import { useEffect } from "react";

// Notes : utiliser le hook useNavLink pour gérer l'effet d'underline
// voir la doc react router dom 


function Navbar() {
  // Add an event listener to each link in the header to underline the active link
  useEffect(() => {
    const links = document.querySelectorAll(".header__link");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        links.forEach((link) => {
          link.classList.remove("header__link__underlined");
        });
        link.classList.add("header__link__underlined");
      });
    });
  }, []);

  return (
    <header className="header">
      <Link className="logo" to="/">
        <img src={Logo} alt="Kasa_Logo" />
      </Link>
      <div className="header__links">
        <Link className="header__link" to="/">
          Accueil
        </Link>
        <Link className="header__link" to="/about">
          À propos
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
