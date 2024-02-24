import { Link } from "react-router-dom";
import Forms from "../forms";
function FormPage ( {
  questions,
  updateAnswer,
  data,
  updateAvatarAuthor,
})
{
  
return (
    <section>
      
      <Forms updateAvatarAuthor={updateAvatarAuthor} updateAnswer={updateAnswer} data={data} questions={questions} />
      <Link className="btn" to="/">Volver al inicio{""} </Link>
      </section>
)};
export default FormPage;

