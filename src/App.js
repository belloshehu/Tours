import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
export const TourContext = React.createContext()

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([])

  const fetchTours = async() =>{
    setLoading(true)
    try{
      const response = await fetch(url)
      const data = await response.json()
      setTours(data)
      setLoading(false)
    }catch(error){
      console.log(error)
      setLoading(false)
    }
  }
  const removeTour = (id) =>{
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  useEffect(()=>{
    fetchTours();
  }, [])

  if(loading){
    return(
      <main>
        <Loading />
      </main>
    )
  }
  if(tours.length === 0){
    return(
      <main>
        <div className="title">
          <h2>no tours</h2>
          <div className='underline'></div>
          <button className="btn" onClick={()=>fetchTours()}> Refresh</button>
        </div>
      </main>
    )
  }
  return(
    <TourContext.Provider value={{tours, removeTour}}>
      <main>
        <Tours/>
      </main>
    </TourContext.Provider>
  )
}

export default App
