import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../scss/pages/ProfilePage.scss"


function ProfilePage ({data}) {
    return (
        <section className="section">
            <h2 className="profile_title">Mi perfil</h2>
            <h3 className="name">{data.name}</h3>
            <h4 className="city">{data.city} </h4>
            <h4 className="city">{data.age} </h4>
            <div className="image">
            <img className="image_img" src={data.image} alt="mi imagen" />
            </div>
            
                
                    
                    <Link className="btn" to="/">
                        Volver al inicio {""}
                    </Link>
        </section>
    )
}

export default ProfilePage;