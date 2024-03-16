import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../scss/pages/RegisterPage.scss"

function RegisterPage() {

  const [ errors, setErrors ] = useState( {} );

  const [data, setData] = useState({
    name: '',
    user: '', 
    pass: '',
  });

  const [ serverResopnse, setServerResopnse ] = useState(  );

  const handleInput = (ev) => {
    setData({
      ...data,
      [ev.currentTarget.id]: ev.currentTarget.value
    })
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const error = {};

    if( data.name === '' ) {
      error.name = 'El nombre es obligatorio';
    }
    if( data.pass === '' ) {
      error.pass = 'La contraseña es obligatoria';
    }

    if( Object.keys(errors).length > 0 ) {
      setErrors(error);
    }
    else {
      // Fetch

      const fetchCreateUser = async () => {
        const response = await fetch('http://localhost:3000/api/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(data)
        });

        const dataResponse = await response.json();

        console.log(dataResponse);

        setServerResopnse(dataResponse);

      }

      fetchCreateUser();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Regístrate</h2>
      <div className="fields">
        <label htmlFor="name">Nombre: </label>
        <input type="text" name="name" id="name" onInput={handleInput} value={data.name} />
        <span className="text--error">{errors.name}</span>
        <label htmlFor="user">Usuaria: </label>
        <input type="text" name="user" id="user" onInput={handleInput} value={data.user} />
        <span className="text--error">{errors.user}</span>
        <label htmlFor="pass">Contraseña: </label>
        <input type="password" name="pass" id="pass" onInput={handleInput} value={data.pass} />
        <span className="text--error">{errors.pass}</span>
      </div>

      {
        serverResopnse && serverResopnse.success === false &&
        <p className="text--error">{serverResopnse.error}</p>
      }

      {
        serverResopnse && serverResopnse.success === true &&
        <p>Te has registrado correctamente. Puedes acceder desde la <Link to="/login">página del login</Link></p>
      }

      <button className="btn" type="submit">Enviar</button>
      <Link className="btn" to="/">Volver</Link>
    </form>
    );
  }

export default RegisterPage;