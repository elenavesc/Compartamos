import Answer from "./answer/answer";
import '../scss/answer/question.scss'

function Question ({text}) {
    return(
        <div className="container_question">
        <label>{text}</label>
        <Answer/>
        </div>
        
    )
}

export default Question;