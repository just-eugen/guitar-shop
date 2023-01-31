import React from 'react'

import '../styles/_filter.scss'

function Filter({items, onClick}) {
    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index);
    }

    return (
        <div className='filter'>
            <ul>
                <li className={activeItem === null ? 'active' : 'block'}
                onClick={() => setActiveItem(null)}>Все</li>
                {
                    items && items.map((category, index) => (
                        <li className={activeItem === index ? 'active' : 'block'}
                        onClick={() => onSelectItem(index)}
                        key={`${category}_${index}`} >{category}</li>   
                    ))
                }   
            </ul>
        </div>
    )
}

export default Filter