import Answer from "./answer/answer";
import '../scss/answer/question.scss'

function Question ({id, text, answers, updateAnswer, value}) {
    const handleChangeSelect = (ev) => {
        updateAnswer(ev.currentTarget.id, ev.currentTarget.value);
    }

    return(
        <div className="container_question">
        <label htmlFor={id}>{text}</label>
        <select id={id} onChange={handleChangeSelect} value={value}>
            <option disabled value="">Selecciona una opción</option>
            {answers.map(oneAnswer => 
                <option key={`ans${id}-${oneAnswer}`} value={oneAnswer}>{oneAnswer}</option>
            )}
        </select>
        </div>
        
    )
}

export default Question;