import { Link } from "react-router-dom";
import image from "../../images/3.png"

function LandingPage(){
    return(
        <div className="landing__page">
        <div className="landing__header">
          <h1 className="landing__title">Comencemos</h1>
          <p className="landing__subtitle">
           Si no te gusta la soledad, <img src={image} alt="logo" />
          </p>
          <Link className="btn" to="/forms">
            Regístrate{" "}
          </Link>
          <Link className="btn" to="/card">
            Mi perfil {" "}
          </Link>
          <Link className="btn" to="/AboutUs">
            Contáctanos {" "}
          </Link>
        </div>
      </div>  
    )
}

export default LandingPage;