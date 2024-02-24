import { Link } from "react-router-dom";
import Forms from "../forms";
function FormPage ( {
  updateAvatarAuthor,
})
{
return (
    <section>
      
      <Forms updateAvatarAuthor={updateAvatarAuthor}/>
      <Link className="btn" to="/">Volver al inicio{""} </Link>
      </section>
)};
export default FormPage;

