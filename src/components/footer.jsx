import Image from '../images/2.png';
import '../scss/footer.scss'

function Footer () {
    return (
        <footer className='footer'>
            <div className='footer_container'>
                <img className='footer_image' src={Image} alt="logo compartamos" />
            </div>
        </footer>

    )
}

export default Footer;