import '../../scss/answer/answer.scss'
function answer() {
    return (
        <div className="nice-form-group">
            <label> Seleccione un valor</label>
        <select name="answer" id="answer_id">
            <option value="nada">0 - Nada</option>
            <option value="muy poco">1 - Muy poco</option>
            <option value="poco">2 - Poco</option>
            <option value="algo">3 - Algo</option>
            <option value="bastante">4 - Bastante</option>
            <option value="mucho">5 - Mucho</option>
        </select>
        </div>
    )
};
export default answer;
