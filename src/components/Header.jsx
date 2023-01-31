import Logo from '../assets/logo.svg'
import Cart from '../assets/cart.svg'

import '../styles/_header.scss'

function Header(){
    return(
        <div className='header'>
            <div className='container'>
                <img src={Logo} alt="Логотип"/>
                <div className='block'>Каталог</div>
            </div> 
            <div className='container'>
                <img src={Cart} alt="Корзина"/>
            </div>
        </div>
    )
}

export default Header;