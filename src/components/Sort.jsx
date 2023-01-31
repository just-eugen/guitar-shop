import React from 'react'

import '../styles/_sort.scss'

function Sort({items}) {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(0);

  const sortRef = React.useRef();

  const activeLabel = items[activeItem];

  const togglevisiblePopup = () =>{
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = (e) =>{
    if (!e.path.includes(sortRef.current)){
      setVisiblePopup(false);
    }
  }

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
  }, []);

  const onSelectItem = (index) => {
    setActiveItem(index);
    setVisiblePopup(false);
  }

  return (
    <div ref={sortRef} className='sort'>
      <div className='sort_label'>
        <b>Сортировать по: </b>
        <span onClick={togglevisiblePopup}>{activeLabel}</span>
      </div>
      {visiblePopup && <div className='sort_popup'>
        <ul>
          {items && items.map((sortCat, index) => (
                <li className={activeItem === index ? 'active' : ''}
                onClick={() => onSelectItem(index) }
                key={`${sortCat}_${index}`} >{sortCat}</li>   
            ))
          }
        </ul>
      </div>}
    </div>
  )
}

export default Sort