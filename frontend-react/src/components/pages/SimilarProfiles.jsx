import { Link } from "react-router-dom";

function SimilarProfile() {
  return (
    <section>
      <h2>Tus posibles compañeros</h2>

      <Link className="btn" to="/forms">
        Editar mi perfil {""}
      </Link>
      <Link className="btn" to="/">
        Volver al inicio{""}
      </Link>
    </section>
  );
}

export default SimilarProfile;
