import '../../scss/answer/answer.scss'
function answer() {
    return (
        <div className="container">
        <select name="answer" id="answer_id">
            <option value="">Selecciona un valor</option>
            <option value="goldfish">0</option>
            <option value="dog">1</option>
            <option value="cat">2</option>
            <option value="hamster">3</option>
            <option value="parrot">4</option>
            <option value="spider">5</option>
        </select>
        </div>
    )
};
export default answer;
