import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import "../../scss/pages/ProfilePage.scss";
import { useEffect, useState } from "react";

function ProfilePage() {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({});
  const [error, setError] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");

    fetch("http://localhost:8080/profile", {
      headers: { Authorization: token },
    })
      .then(async (response) => {
        const data = await response.json();
        setProfileData(data);
        setError(null);
      })
      .catch((error) => {
        setError("No se pudo cargar los datos del usuario");
      });
  }, []);

  return (
    <section>
      <h2 className="profile_title">Mi perfil</h2>
      <div className="section_profile">
        <div className="image">
          <img
            className="image_img"
            src={"data:image/jpeg;base64," + profileData.image}
            alt="mi imagen"
          />
        </div>

        <div className="section_info">
          <h3 className="name">Nombre: {profileData.name}</h3>
          <h4 className="city">Soy de: {profileData.address}</h4>
          <h4 className="city">
            Nací en: {new Date(profileData.birthdate).getFullYear()}{" "}
          </h4>
          <h4 className="city">
            Yo soy: <p>{profileData.description}</p>
          </h4>
        </div>
      </div>

      <Link className="btn" to="/forms">
        Modificar mi perfil {""}
      </Link>

      <Link className="btn" to="/">
        Volver al inicio {""}
      </Link>
    </section>
  );
}

export default ProfilePage;
