import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import "../../scss/pages/RegisterPage.scss"

function RegisterPage() {

  const [ errors, setErrors ] = useState( {} );

  const [errorResponse, setErrorResponse] = useState(undefined)

  const [data, setData] = useState({
    name: '',
    email: '', 
    password: '',
  });

  const navigate = useNavigate();

  const handleInput = (ev) => {
    setData({
      ...data,
      [ev.currentTarget.id]: ev.currentTarget.value
    })
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const error = {};

    if( data.password === '' ) {
      error.password = 'La contraseña es obligatoria';
    }

    if( Object.keys(errors).length > 0 ) {
      setErrors(error);
    }
    else {
      // Fetch
      const fetchCreateUser = async () => {
        fetch('http://localhost:8080/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(data)
        }).then(async (response) =>
          {
            const reponseData = await response.json()
            localStorage.setItem('token', reponseData.token)
            setErrorResponse(undefined)

            navigate("/forms")
          }
        ).catch((error) => {
          setErrorResponse(error.message)
        })
      }

      fetchCreateUser();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Regístrate</h2>
      <div className="fields">
        <label htmlFor="user">Usuario: </label>
        <input type="text" name="email" id="email" onInput={handleInput} value={data.email} />
        <span className="text--error">{errors.email}</span>
        <label htmlFor="pass">Contraseña: </label>
        <input type="password" name="password" id="password" onInput={handleInput} value={data.password} />
        <span className="text--error">{errors.password}</span>
      </div>

      {
        errorResponse &&
        <p className="text--error">{errorResponse}</p>
      }
      <button className="btn" type="submit">Enviar</button>
      <Link className="btn" to="/">Volver</Link>
    </form>
    );
  }

export default RegisterPage;