
import "../scss/forms.scss";
import Question from './question';
import GetAvatar from "./getAvatar";
import { Link } from "react-router-dom";

function form ( {
  updateAvatarAuthor,
  updateAnswer,
  data,
  questions,
})
{
  const handleClickBtnGenerar = (event) => {
    event.preventDefault();

    alert(`Datos a enviar:\n${JSON.stringify(data, null, ' ')}`)
  }
  const handleInput = (ev) => {
    updateAnswer(ev.currentTarget.id, ev.currentTarget.value);
}
return (
      <form className="addForm">
        <div className="title_container">
        <h2 className="title">Cuéntale sobre ti:</h2>
        </div>
        <div className="form_container">

          <label className="username">Tu nombre:
          <input type="text" value={data.name} onInput={handleInput} id="name" />
          </label>

          <label className="city">Tu ciudad:
          <input type="text" value={data.city} onInput={handleInput} id="city" />
          </label>

          {
            questions.map( oneQuestion => 
              <Question key={oneQuestion.id} id={oneQuestion.id} text={oneQuestion.text} answers={oneQuestion.answers} updateAnswer={updateAnswer} value={data[oneQuestion.id]} /> 
            )
          }
         
          <fieldset className="btn">
          <GetAvatar
            updateAvatar={updateAvatarAuthor}
            text="Sube una foto tuya"
          />
          </fieldset>
          <Link className="btn" to="/card">Generar perfil</Link>
         {/*<button className="btn" onClick={handleClickBtnGenerar}> Generar perfil</button>*/}
        </div>
          
      </form>
)};
export default form;