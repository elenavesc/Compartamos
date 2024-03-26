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

  // TODO AÑADIR ERROR EN ROJO SI SE PRODUCE
  return (
    <form className="addForm">
      <div className="title_container">
        <h2 className="title">Cuéntale sobre ti:</h2>
      </div>
      <section className="section">
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

          <fieldset className="btn">
            <GetAvatar
              updateAvatar={updateAvatarAuthor}
              text="Sube una foto tuya"
            />
          </fieldset>

          <button className="btn" onClick={handleOnClick}>
            {" "}
            Generar perfil
          </button>
        </div>
      </section>
    </form>
  );
}
export default form;
