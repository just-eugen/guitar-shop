import Banner_img from '../assets/banner_img.svg';

import '../styles/_banner.scss'

function Banner (){
    return(
        <div className='banner'>
            <div className='block'>
                <h1>Почувствуй глубину звука</h1>
                <h3>Лучшие акустические гитары уже в магазине</h3>                
                <button>Перейти в каталог</button>
            </div>
            <img src={Banner_img} alt="Гитара" />
        </div>
    )
}

export default Banner;