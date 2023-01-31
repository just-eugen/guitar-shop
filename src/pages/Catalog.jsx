import React from 'react'
import {ContentBlock, Filter, Sort} from '../components'
import '../styles/_home.scss'

function Catalog({items}) {
  return (
    <div>
      <div style={{display: "flex", justifyContent: "space-between", paddingBottom: "20px" }}>
        <Filter items={['Акустические', 'Классические', 'Электронные', 'Бас-гитары', 'Укулеле']}/>
        <Sort items={['популярности', 'цене', 'названию']}/>
      </div>
      <div className='content'>
        {
          items.map(obj => <ContentBlock key={obj.id} {...obj}/>)
        } 
      </div>
    </div>
  )
}

export default Catalog