import React from 'react'
import {Banner, ContentBlock} from "../components";
import "../styles/_home.scss"

function Home({items}) {

  return (
      <div>
        <Banner />
        <h2>Новинки</h2>
        <div className='content'>
          {
            items.map(obj => <ContentBlock key={obj.id} {...obj}/>)
          }
        </div>
      </div>
  )
}

export default Home