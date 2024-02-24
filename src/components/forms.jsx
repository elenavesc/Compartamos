
import "../scss/forms.scss";
import Question from './question';
import GetAvatar from "./getAvatar";

function form ( {
  updateAvatarAuthor,
})
{
return (
      <form className="addForm">
        <div className="title_container">
        <h2 className="title">Cuéntale sobre ti:</h2>
        </div>
        <div className="form_container">
          <Question text='¿Te importaría cambiar de ciudad para convivir?'/> 
          <Question text='¿Es importante que tu compañero sea del mismo sexo que tú?'/> 
          <Question text='¿Te gustaría compartir aficiones y tu tiempo libre con tu compañero?'/> 
          <Question text='¿Es imprescindible que compartaís la misma salud financiera?'/> 
          <Question text='¿Te importaría que tu compañero tuviese mascota?'/> 
          <Question text='¿Es importante para ti la semejanza de edad entre tu compañero y tú?'/> 
          {/*<label>¿Qué tipo de vivienda prefieres?</label>
          <select name="hogar" id="hogar_id">
            <option value="piso">Piso</option>
            <option value="casa">Casa</option>
            <option value="chalet">Chalet</option>
          </select>
          <label>¿Dónde preferírias vivir?</label>
          <select name="lugar" id="lugar_id">
            <option value="Costa">Costa</option>
            <option value="campo">Campo</option>
            <option value="ciudad">Ciudad</option>
            <option value="pueblo">Pueblo</option>
          </select>
          <label>¿Cada cúanto te gustaría realizar actividades junto a tu compañero?</label>
          <select name="actividades" id="actividades_id">
            <option value="nunca">Nunca</option>
            <option value="mensualmente">Mensualmente</option>
            <option value="semanalmente">Semanalmente</option>
            <option value="varias veces a la semana">Varias veces a la semana</option>
            <option value="diariamente">Diariamente</option>
          </select>*/} 
          <Question text='¿Te gusta cocinar?'/> 
          <Question text='¿Eres una persona resiliente?'/> 
          <Question text='¿Te gustaría ampliar tu círculo de amistades?'/> 
          <Question text='¿Es importante para ti el orden y la limpieza?'/>
          <Question text='¿Eres una persona nocturna?'/>
          <fieldset className="btn">
          <GetAvatar
            updateAvatar={updateAvatarAuthor}
            text="Sube una foto tuya"
          />
          </fieldset>
          <button className="btn"> Generar perfil</button>
        </div>
          
      </form>
)};
export default form;