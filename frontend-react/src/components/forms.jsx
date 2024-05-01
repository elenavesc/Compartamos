import "../scss/forms.scss";
import Question from "./question";
import GetAvatar from "./getAvatar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function form({ updateAvatarAuthor, updateAnswer, questions }) {
  const [data, setData] = useState({
    name: "",
    address: "",
    birthdate: "",
    description: "",
  });
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleOnClick = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      setError("El usuario no esta logeado");
      return;
    }
    fetch("http://localhost:8080/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status == 200) navigate("/profile");
        else setError("No se pudo registrar el formulario");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleTextInput = (ev) => {
    setData({
      ...data,
      [ev.currentTarget.id]: ev.currentTarget.value,
    });
  };

  return (
    <form className="addForm">
      <div className="title_container">
        <h2 className="title">Cuéntale sobre ti:</h2>
      </div>
      <h3 className="h31">Lo primero es lo primero, presentate:</h3>
      <section className="section_form">
        <div className="nice-form-group">
          <label className="username">
            Tu nombre:
            <input
              type="text"
              value={data.name}
              onInput={handleTextInput}
              id="name"
            />
          </label>

          <label className="address">
            Tu ciudad:
            <input
              type="text"
              value={data.address}
              onInput={handleTextInput}
              id="address"
            />
          </label>

          <label className="age">
            Tu fecha de nacimiento:
            <input
              type="text"
              value={data.birthdate}
              onInput={handleTextInput}
              id="birthdate"
            />
          </label>
          <label className="description">
            Descríbete, te quieren conocer:
            <input
              type="text"
              className="dsc"
              value={data.description}
              onInput={handleTextInput}
              id="description"
            />
          </label>
        </div>
      </section>
      <h3 className="h31">¿Qué prefieres?</h3>
      <section className="section_form">
        <div className="nice-form-group">
          {questions.map((oneQuestion) => (
            <Question
              key={oneQuestion.id}
              id={oneQuestion.id}
              text={oneQuestion.text}
              answers={oneQuestion.answers}
              updateAnswer={updateAnswer}
              value={data[oneQuestion.id]}
            />
          ))}

          {error && <p>{error}</p>}
        </div>
      </section>
      <h3 className="h31">¡Sonríe para la foto!</h3>
      <section className="section_form">
        <fieldset className="btn">
          <GetAvatar
            updateAvatar={updateAvatarAuthor}
            text="Sube una foto tuya"
          />
        </fieldset>
      </section>

      <section>
        <button className="btn" onClick={handleOnClick}>
          {" "}
          Generar perfil
        </button>
      </section>
    </form>
  );
}
export default form;
