import { Link } from "react-router-dom";
import Card from "../card";

function ProfilePage () {
    return (
        <section>
        <h2>Mi perfil</h2>
            <Card/>
                <Link className="btn" to="/forms">
                    Editar mi perfil {""}
                </Link>
                <Link className="btn" to="/LandingPage">
                    Volver al inicio {""}
                </Link>
        </section>
    )
}

export default ProfilePage;