import { Link } from "react-router-dom";
import image from "../../images/3.png";
import "../../scss/pages/LandingPage.scss";
import imageFam from "../../images/abuelos.png";
import imageSpain from "../../images/abuelos2.jpg";
import imageTwo from "../../images/Screenshot_20240308_151837_Gallery.jpg";



function LandingPage(){
    return(
      
        <div className="landing__page">
        <div className="landing__header">
          {/*<h1 className="landing__title">Comencemos</h1>*/ }
          <div className="landing__text">
           <p className="landing__subtitle">Si no te gusta la soledad, <img className="landing_image" src={image} alt="logo" /></p>
          </div>
          <Link className="btn" to="/register">
            Regístrate {" "}
          </Link>
          <div className="landing_ph">
          <section className="landing_section">
            <img className="landing_img" src={imageFam} alt="" />
            <img className="landing_img" src={imageSpain} alt="" />
            <img className="landing_img" src={imageTwo} alt="" />
            
          </section>
          
              <p className="landing_frase">"Mi soledad no tiene nada que ver con la presencia o ausencia de personas. Detesto quien me roba la soledad sin a cambio ofrecer verdadera compañía"</p>
              <p className="landing_author">-Friedrich Nietzsche-</p>
            </div>
          <Link className="btn" to="/forms">
            Encuentralo {" "}
          </Link>
        </div>
      </div>  
    )
}

export default LandingPage;