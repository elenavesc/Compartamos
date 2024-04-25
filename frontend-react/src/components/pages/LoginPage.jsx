import PropTypes from "prop-types";
import "../../scss/pages/LogingPage.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginPage() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  const navigate = useNavigate();

  const handleInput = (ev) => {
    setData({
      ...data,
      [ev.currentTarget.id]: ev.currentTarget.value,
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    // Fetch
    const fetchCreateUser = async () => {
      fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then(async (response) => {
          const reponseData = await response.json();
          localStorage.setItem("token", reponseData.token);

          navigate("/profile");
        })
        .catch((error) => {
          setError("Usuario o contraseña incorrectos");
        });
    };

    fetchCreateUser();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="fields">
        <h3>Accede a la aplicación</h3>
        <label htmlFor="user"></label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Usuario"
          onInput={handleInput}
        />
        <label htmlFor="password"></label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Contraseña"
          onInput={handleInput}
        />
        <button className="btn">Enviar</button>
      </div>
      {error && <p className="text--error">{error}</p>}

      <Link className="btn" to="/">
        Volver
      </Link>
    </form>
  );
}

LoginPage.propTypes = {};

export default LoginPage;
