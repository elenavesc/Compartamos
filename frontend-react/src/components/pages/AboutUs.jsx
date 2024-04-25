import { Link } from "react-router-dom";
import imageFam from "../../images/IMG-20240302-WA0033.jpg";
import "../../scss/pages/AboutUs.scss";

function AboutUs() {
  return (
    <section className="aboutUs">
      <h2>Sobre nosotros</h2>
      <h3 className="h32">
        Contra la Sombra de la Soledad: Un Homenaje a Nuestros Mayores
      </h3>

      <section className="text">
        <div className="div">
          <p className="phrase">
            {" "}
            En el delicado tejido de la vida, nuestros mayores son los hilos que
            sostienen la esencia misma de la experiencia humana. Han vivido, han
            amado, han enfrentado desafíos y, entretejidos en las fibras del
            tiempo, han cosechado la sabiduría que solo la existencia plena
            puede otorgar. Sin embargo, a menudo, enfrentan una sombra
            silenciosa y desgarradora: la soledad.
          </p>

          <p className="phrase">
            {" "}
            La soledad, como un viento gélido, puede penetrar los días de
            aquellos que han dedicado sus años a construir hogares, criar
            familias y contribuir al tapiz de la sociedad. Es imperativo
            reconocer y abordar la importancia de combatir esta sombra, no solo
            por el bienestar individual de nuestros mayores, sino por el
            enriquecimiento colectivo que su experiencia puede aportar a
            nuestras vidas.{" "}
          </p>

          <p className="phrase">
            {" "}
            En la lucha contra la soledad, encontramos un llamado a la empatía y
            la conexión. Es un recordatorio de que cada historia, cada arruga en
            el rostro, lleva consigo una riqueza inigualable. Al combatir la
            soledad, estamos construyendo puentes entre generaciones, tejiendo
            lazos que trascienden el tiempo y el espacio.
          </p>

          <p className="phrase">
            {" "}
            Así que, recordemos siempre, en cada visita, en cada abrazo, en cada
            palabra amable, estamos desafiando la oscuridad de la soledad y
            construyendo un manto de amor que envuelve a nuestros mayores.
            Porque en su alegría, encontramos la nuestra; en su bienestar,
            encontramos la esencia misma de la humanidad.
          </p>
        </div>
        <img src={imageFam} className="image" alt="" />
      </section>
      <section className="section2">
        <div className="form__contact" id="#_contacto">
          <h3 className="h32">CONTACTO</h3>

          <p className="phrase2">
            Si deseas ponerte en contacto con nosotros te lo ponemos fácil.
          </p>

          <p className="phrase">
            Todos los campos marcados con{" "}
            <strong className="form__contact__info__asterisco">*</strong> son
            obligatorios
          </p>
        </div>

        <form
          className="form__application"
          action="https://formspree.io/f/mbjvegey"
          method="post"
        >
          <label className="label-form" for="name">
            <span className="phrase3">
              Nombre Completo<span class="text-style-1">*</span>
            </span>
            <input
              className="phrase3"
              type="text"
              name="name"
              id="name"
              placeholder="Tu nombre"
              autocomplete="name"
              required
            />
          </label>
          <label className="label-form" for="email">
            <span className="phrase3">
              Email<span class="text-style-1">*</span>
            </span>
            <input
              className="phrase3"
              type="email"
              name="email"
              id="email"
              placeholder="Tu mejor email"
              autocomplete="email"
              required
            />
          </label>
          <label className="label-form" for="tel">
            <span className="phrase3">Teléfono</span>
            <input
              className="phrase3"
              type="text"
              name="tel"
              id="tel"
              placeholder="Ej:123456789"
              autocomplete="tel"
            />
          </label>
          <label className="label-form" for="message">
            <span className="phrase3">
              Mensaje<span class="text-style-1">*</span>
            </span>
            <textarea
              className="phrase3"
              id="message"
              placeholder="¡Cuéntanos!"
              required
            ></textarea>
          </label>
          <div className="button-container">
            <input className="btn" type="submit" value="ENVIAR" />
          </div>
        </form>
      </section>
      <section>
        <Link className="btn" to="/profile">
          Mi perfil {""}
        </Link>
        <Link className="btn" to="/">
          Volver al inicio {""}
        </Link>
      </section>
    </section>
  );
}

export default AboutUs;
