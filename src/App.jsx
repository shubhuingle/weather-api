import React, { useEffect, useState } from "react";
import './App.css'
function App(){
  const[city,setCity]=useState('');
  const[temp,setTemp]=useState(false)
  const[weather,setWeather]=useState([]);
  useEffect(()=>{
    const url="https://api.weatherapi.com/v1/forecast.json"
    const key="key=a188c631d27c4b788cb112629252404"
   fetch(`${url}?${key}&q=washim`)
   .then(response=>response.json())
   .then(data=>{console.log(data)
    setWeather(data)
    setTemp(true)})
   },[])

  const searchWeather = () =>{
    const url="https://api.weatherapi.com/v1/forecast.json"
    const key="key=a188c631d27c4b788cb112629252404"
   fetch(`${url}?${key}&q=${city}`)
   .then(response=>response.json())
   .then(data=>{console.log(data)
    setWeather(data)
    setTemp(true)
   })
   setCity('')
  }
return(
  <>
  <div className="main">
     <div className="child1">
      <input 
      id="inp"
      type="text" 
      placeholder="Enter Your City Name Only.."
      value={city}
      onChange={(e)=>{setCity(e.target.value) }}
      />
      <button id="btn" onClick={searchWeather}>Search</button>
     </div>

     {temp && <>
      <div className="child2">
        <img src={weather.current.condition.icon} alt="" />
      <h1 id="tempc">{weather.current.temp_c}°C</h1>
      <h1 id="place">{weather.location.name}</h1>
      <h2>{weather.location.region}</h2>
      <h3>{weather.location.country}</h3>
      </div>
      <div className="child3">
        <h2>Sunrise:{weather.forecast.forecastday[0].astro.sunrise}</h2>
        <h2>Sunset:{weather.forecast.forecastday[0].astro.sunset}</h2>
        <h2>Max:{weather.forecast.forecastday[0].day.maxtemp_c}°C</h2>
        <h2>Min:{weather.forecast.forecastday[0].day.maxtemp_c}°C</h2>

      </div>
     
     </>}
     
  </div>
  </>
)
}
export default App;