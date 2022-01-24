import React, { useContext } from 'react';
import Tour from './Tour';
import { TourContext} from './App';

const Tours = () => {
  const {tours} = useContext(TourContext)
  return(
    <section>
      <div className='title'>
        <h2>Our tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {
          tours.map((tour)=>{
            return <Tour key={tour.id} {...tour}/>
          })
        }
      </div>
    </section>
  )
};

export default Tours;
