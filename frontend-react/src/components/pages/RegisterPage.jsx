import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../../scss/pages/RegisterPage.scss";

function RegisterPage() {
  const [errors, setErrors] = useState({});

  const [errorResponse, setErrorResponse] = useState(undefined);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (ev) => {
    setData({
      ...data,
      [ev.currentTarget.id]: ev.currentTarget.value,
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const error = {};

    if (data.password === "") {
      error.password = "La contraseña es obligatoria";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(error);
    } else {
      // Fetch
      const fetchCreateUser = async () => {
        fetch("http://localhost:8080/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
          .then(async (response) => {
            const reponseData = await response.json();
            localStorage.setItem("token", reponseData.token);
            setErrorResponse(undefined);

            navigate("/forms");
          })
          .catch((error) => {
            setErrorResponse(error.message);
          });
      };

      fetchCreateUser();
    }
  };

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <div className="fields">
        <h3>Regístrate</h3>
        <label htmlFor="user"></label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Usuario"
          onInput={handleInput}
          value={data.email}
        />
        <span className="text--error">{errors.email}</span>
        <label htmlFor="pass"></label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Contraseña"
          onInput={handleInput}
          value={data.password}
        />
        <span className="text--error">{errors.password}</span>
        <button className="btn" type="submit">
          Enviar
        </button>
      </div>

      {errorResponse && <p className="text--error">{errorResponse}</p>}

      <Link className="btn" to="/">
        Volver
      </Link>
    </form>
  );
}

export default RegisterPage;
