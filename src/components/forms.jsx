
import "../scss/forms.scss";
import Question from './question';
import GetAvatar from "./getAvatar";

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
return (
      <form className="addForm">
        <div className="title_container">
        <h2 className="title">Cuéntale sobre ti:</h2>
        </div>
        <div className="form_container">

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
          <button className="btn" onClick={handleClickBtnGenerar}> Generar perfil</button>
        </div>
          
      </form>
)};
export default form;