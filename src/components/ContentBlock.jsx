
import Stars from '../assets/stars.svg'
import SmallCart from '../assets/small_cart.svg'

import '../styles/_contentBlock.scss'

function ContentBlock( {name, imageUrl, price} ) {

    return (              
        <div className='contentBlock'>
            <img src={imageUrl} alt= {name}/>                       
            <h3> {name} </h3>                       
            <div className='stars'>
                <img src={Stars} alt="Отзыв" />
            </div>
            <h4> {price + price * 0.2} </h4>
            <h3> {price} </h3>
            <button> 
                <img src={SmallCart} alt="Купить" />
                КУПИТЬ
            </button> 
        </div>                        
    )
}

export default ContentBlock