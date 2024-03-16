import PropTypes from 'prop-types';
import "../../scss/pages/LogingPage.scss"
import { Link } from 'react-router-dom';

function LoginPage() {

return (
  <form>
    <h2>Accede a la aplicación</h2>
    <div className="fields">
        <label htmlFor="name">Nombre: </label>
        <input type="text" name="name" id="name" />
        <label htmlFor="user">Usuaria: </label>
        <input type="text" name="user" id="user"/>
        <label htmlFor="pass">Contraseña: </label>
        <input type="password" name="pass" id="pass" />
      </div>
      <button className="btn" type="submit">Enviar</button>
      <Link className="btn" to="/">Volver</Link>
    </form>
  );
}

LoginPage.propTypes = {
};

export default LoginPage;