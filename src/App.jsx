import { useState,useEffect } from 'react'
import axios from 'axios'

function App() {
  const [location, setLocation] = useState('')
  const [data, setData] = useState({})
  const apiKey = import.meta.env.VITE_API_KEY

  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=imperial`

  
  const handleSearch=async (event) => {
    try{
      if(event.key==='Enter'){
        const response=await axios.get(url)
        setData(response.data)
        
        setLocation('')
      }
    }
    catch(e){
      console.log(e)
      setData({message:'No city found'})
    }
  }

  return (
    
    <div className='app'>
      <div className='container'>
        <div className='search--input'>
          <input type='text' placeholder='Enter a location' onChange={(e)=> setLocation(e.target.value)} onKeyDown={handleSearch} value={location}/>
        </div>
        {data.message && <div className='no-data'>{data.message}</div>}
        {data.name && <div className='wrapper'>
          <div className='top'>
           <div className='location'>
             <p>{data.name}</p>
           </div>
          
           <div className='temp'>
             {data.main?<h1>{data.main.temp}°F</h1>:null}
           </div>
           <div className='desc'>
            {data.weather?<p>{data.weather[0].description.charAt(0).toUpperCase()+data.weather[0].description.slice(1)}</p>:null}
           </div>
          </div>

        
        <div className='bottom'>
           <div className='feel'>
             {data.main?<p>{data.main.feels_like}F</p>:null}
             <p>Feels Like</p>
           </div>
           <div className='humidity'>
            {data.main?<p>{data.main.humidity}%</p>:null}
            <p>Humidity</p>
           </div>
            <div className='winds'>
            {data.wind?<p>{data.wind.speed} MPH</p>:null}
            <p>Winds</p>
            </div>
         </div>
         </div>}
         
      </div> 
    </div>
  )
}

export default App
