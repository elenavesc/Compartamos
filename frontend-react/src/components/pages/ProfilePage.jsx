import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import "../../scss/pages/ProfilePage.scss";
import { useEffect, useState } from "react";

function ProfilePage() {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({})
  const [error, setError] = useState()

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");

    fetch("http://localhost:8080/profile", {
      headers: { Authorization: token },
    }).then(async (response) => {
      const data = await response.json();
      console.log(data)
      setProfileData(data)
      console.log(profileData)
      setError(null)
    }).catch((error)=>{
        setError('No se pudo cargar los datos del usuario')
    });
  }, []);

  return (
    // TODO PONER EL ERROR DE QUE NO SE HAN PODIDO CARGAR LOS DATOS
    <section className="section">
      <h2 className="profile_title">Mi perfil</h2>
      <h3 className="name">{profileData.name}</h3>
      <h4 className="city">{profileData.address} </h4>
      <h4 className="city">{new Date(profileData.birthdate).getFullYear()} </h4>
      <div className="image">
        <img className="image_img" src={profileData?.image} alt="mi imagen" />
      </div>

      <Link className="btn" to="/">
        Volver al inicio {""}
      </Link>
    </section>
  );
}

export default ProfilePage;
