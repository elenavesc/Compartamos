import { Link } from "react-router-dom";
import Image from "../images/1.png";
import "../scss/header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header_container">
        <img className="header_image" src={Image} alt="logo compartamos" />
        <section className="header_menu">
          <Link className="header_menu1" to="/">
            Inicio{" "}
          </Link>
          <Link className="header_menu1" to="/profile">
            Mi perfil{" "}
          </Link>
          <Link className="header_menu1" to="/login">
            Accede{" "}
          </Link>
          <Link className="header_menu1" to="/AboutUs">
            Contáctanos{" "}
          </Link>
        </section>
      </div>
    </header>
  );
}

export default Header;
