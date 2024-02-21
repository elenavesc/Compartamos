import Image from '../images/1.png';
import '../scss/header.scss';

function Header () {
    return (
        <header className='header'>
            <div className='header_container'>
                <img className="header_image" src={Image} alt="logo compartamos" />
                <section className='header_menu'>
                <p>Regístrate</p> <p>Mi perfil</p> <p>Contactanos</p>
                </section>
            </div>
        </header>

    )
}

export default Header;