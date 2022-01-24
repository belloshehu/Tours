import React, { useContext, useState } from 'react';
import {TourContext} from './App'

const Tour = ({id, name, image, info, price}) => {
  const {removeTour} = useContext(TourContext)
  const [readMore, setReadMore] = useState(false)

  return (
    <article className='single-tour'>
      <img src={image} alt={name}/>
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {
            readMore? info : `${info.substring(0, 200)}...`
          }
          <button onClick={()=>setReadMore(!readMore)}>
            {readMore? 'Show more': 'Read less'}
          </button>
        </p>
        <button className='delete-btn' onClick={()=>removeTour(id)} >Not interested</button>
      </footer>
    </article>
  )
};

export default Tour;
