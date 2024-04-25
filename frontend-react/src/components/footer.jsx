import Image from "../images/2.png";
import "../scss/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer_text">
        {" "}
        2024 Compartamos. Organización por y para los mayores
      </p>
      <div className="footer_container">
        <img className="footer_image" src={Image} alt="logo compartamos" />
      </div>
    </footer>
  );
}

export default Footer;
