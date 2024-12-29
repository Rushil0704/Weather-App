import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let[city,setcity]=useState("")
    let[error,seterror]=useState(false);

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="c964a6a7dbc246d410d2793d5bf9bce4";

    let getWeatherInfo=async()=>{
          try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
           let jsonResponse= await response.json(); //json formet
        //    console.log(jsonResponse)
           let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelslike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description
           }
           console.log(result)
           return result;
        }catch(err)
        {
            throw err;
        }
    }



   

    let handlechange=(event)=>{
        setcity(event.target.value)
        
    } // input ke liye
    let handlesubmit=async(event)=>{
        try{

        
        event.preventDefault();
        console.log(city)
        setcity("");
       let newinfo= await getWeatherInfo();
       updateInfo(newinfo)
        }catch(err){
            seterror(true)
        }
    } // button ke liye

    return(
        <div className='SearchBox'>
            <form onSubmit={handlesubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handlechange} />
            <br></br>
            <Button variant="contained" type='submit' >
             Search
            </Button>
            {error && <p>No such place exists!</p>}
            </form>
        </div>
    )
}