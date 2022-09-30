import React from 'react'
import "../css/weather.css"
import {TiWeatherCloudy} from "react-icons/ti"
import {RiUserLocationLine} from "react-icons/ri"
import { useState } from 'react'
import { useEffect } from 'react'


const Weather = () => {
    const [city,setCity]= useState(null)
    const [search,setSearch] = useState(null)
    const [submit,setSubmit] = useState(null)
    console.log(search)
    console.log(submit)
    // 6a938aaa348ce5f73e3bf05a703c8640
    
   useEffect(()=>{
    const fetchApi=async()=>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${submit}&appid=6a938aaa348ce5f73e3bf05a703c8640`
        const data = await fetch(url).then((dat)=>dat.json())
        setCity(data.main)
  
        
    }
    fetchApi()
   
   },[submit])
  return (
    <>
        <div className='main'>
            <div className='card'>
            <section>
            <div style={{marginLeft:"40px"}}><b style={{fontSize:"20px",color:"whitesmoke"}}>Check Your Weather </b> <span style={{color:"white", fontSize:"50px"}}><TiWeatherCloudy/></span></div>
            <div style={{fontSize:"35px",color:"whitesmoke"}}><RiUserLocationLine/></div>
            <div><input onChange={(e)=>setSearch(e.target.value)}  style={{borderRadius:"10px",padding:"20px 15px 5px 0",border:"10px solid white"}} type="text" /></div>
            <div  style={{marginTop:"20px",fontSize:"20px",fontWeight:"400"}}>{search}</div>
            <input style={{borderRadius:"5px", border:"5px solid whitesmoke"}} onClick={()=>setSubmit(search)} type="submit"  />
            <h1 style={{fontWeight:"300",fontSize:"50px"}}>{city?`${Math.round(city.temp-273.15)}°Cel`: `Min:-°C` }</h1>
            <div>{city?`Min:${Math.round(city.temp_min-273.15)}°Cel    `: `Min:-°C ` }<span>{city? `Max:${Math.round(city.temp_max-273.15)}°Cel` : `Max:-°C`}</span></div>
            <div className='wave wave1'></div>
            <div className='wave wave2'></div>
            <div className='wave wave3'></div>
            <div className='wave wave4'></div>
        </section>
            </div>
        </div>

    </>
  )
}

export default Weather