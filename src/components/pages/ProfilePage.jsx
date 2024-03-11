import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../scss/pages/ProfilePage.scss"


function ProfilePage ({data}) {
    return (
        <section>
        <h2 className="profile_title">Mi perfil</h2>
        <h3 className="name">{data.name}</h3>
        <h4 className="city">{data.city} </h4>
    
        <img className="image" src={data.image} alt="mi imagen" />
        
        
            
                
                <Link className="btn" to="/">
                    Volver al inicio {""}
                </Link>
        </section>
    )
}

export default ProfilePage;