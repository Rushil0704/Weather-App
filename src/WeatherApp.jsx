import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

export default function WeatherApp(){
    const [weatherinfo,setweatherinfo]=useState({
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.85,
        tempMin: 25.05,
        tempMax: 24.05,
        humidity: 47,
        weather: "haze", 
    })

     let updateInfo=(newinfo)=>{
        setweatherinfo(newinfo)
     }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Delta</h2>
             <SearchBox updateInfo={updateInfo}/>
              <InfoBox info={weatherinfo}/>
        </div>
    )
}