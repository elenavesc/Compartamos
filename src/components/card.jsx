
import Forms from "./forms";
import GetAvatar from "./getAvatar";
function Card (){
    return(
        <section className="card">
            <div className="card_photo">
               <GetAvatar/> 
            </div>
            <div className="card_name">
                <h1>Nombre Apellidos</h1>
            </div>
            <section>
                <p>
                    <Forms/>
                </p>
            </section>
        </section>
    )
}


export default Card;