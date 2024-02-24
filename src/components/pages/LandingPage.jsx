import { Link } from "react-router-dom";
import image from "../../images/3.png"
import "../../scss/pages/LandingPage.scss"

function LandingPage(){
    return(
        <div className="landing__page">
        <div className="landing__header">
          <h1 className="landing__title">Comencemos</h1>
          <div className="landing__text">
           <p className="landing__subtitle">Si no te gusta la soledad, <img className="landing_image" src={image} alt="logo" /></p>
          </div>
          <Link className="btn" to="/similar">
            Encuentralo {" "}
          </Link>
        </div>
      </div>  
    )
}

export default LandingPage;