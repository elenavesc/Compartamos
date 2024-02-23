import { Link } from "react-router-dom";


function AboutUs () {
    return (
        <section>
        <h2>Sobre nosotros</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatibus modi doloremque esse, vitae tempore aliquid at architecto, similique eum sit cumque veniam neque iusto dignissimos, odio facere earum. Beatae.</p>
                <Link className="btn" to="/card">
                    Mi perfil {""}
                </Link>
                <Link className="btn" to="/LandingPage">
                    Volver al inicio {""}
                </Link>
        </section>
    )
}

export default AboutUs;