import { useEffect, useState } from "react"
import Cardinfo from "../Cardinfo/Cardinfo"
import ForeCastInfo from "../ForeCastInfo/ForeCastInfo"
import Map from "../Map/Map"
import style from './Home.module.css'
interface infoapi{
  name?:string,
  region?:string,
  country?:string,
  localtime?:string
}
interface weather{
  temp_c?:number,
  uv?:number,
  wind_kph?:string,
  localtime?:string,
  condition?:{text:string,icon:string,code:number}
}
interface center {
  lat:number,
  lng:number
}


export default function Home (){
 
  
     const [city,setCity]=useState('')
     const [infocity,setInfoCity]=useState<infoapi>({})
     const [forecast,setForeCast]=useState([])
     const [error,setError]=useState('')
     const [weatherinfo,setWeatherInfo]=useState<weather>({})
     const [centermap,setCenterMap]=useState <center>({lat:0,lng:0})
      useEffect(()=>{
      const actuallocation=()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
          const lat = position.coords.latitude
          const long = position.coords.longitude
          fetch(`https://api.weatherapi.com/v1/forecast.json?key=e019ca05994d40b1a2c32420231301&q=${lat},${long}&lang=es&days=5`)
         .then(response=>response.json())
         .then(data=>{
          console.log(data)
           data.error?setError(data.error.message):setError('')
           setInfoCity(data.location);
           setWeatherInfo(data.current)
           setForeCast(data.forecast.forecastday)
           console.log(data.forecast.forecastday ,'48')
           setCenterMap({lat,lng:long})
         })
         .catch(error=>console.log(error))
        })
      }
      actuallocation()
     },[])
     const onclick =()=>{
     city.length?fetch(`https://api.weatherapi.com/v1/forecast.json?key=e019ca05994d40b1a2c32420231301&q=${city}&days=5&aqi=no&alerts=no&lang=es`)
         .then(response=>response.json())
         .then(data=>{
          console.log(data)
           data.error?setError(data.error.message):setError('')
           setInfoCity(data.location);
           setForeCast(data.forecast.forecastday)
           setWeatherInfo(data.current)
           setCenterMap({lat:data.location.lat,lng:data.location.lon})
         })
         .catch(error=>console.log(error))
         :setError('Escribe alguna ciudad')
     }
  
    const onMapclick=(coords:string)=>{
     fetch(`https://api.weatherapi.com/v1/forecast.json?key=e019ca05994d40b1a2c32420231301&q=${coords}&days=5&aqi=no&alerts=no&lang=es`)
      .then(response=>response.json())
      .then(data=>{
       console.log(data)
        data.error?setError(data.error.message):setError('')
        setForeCast(data.forecast.forecastday)
        setInfoCity(data.location);
        setWeatherInfo(data.current)
      })
      .catch(error=>console.log(error))
    }
    console.log(forecast)
    return(
    <div>
        <input value={city} onChange={(e)=>{setCity(e.target.value)}} />
       <button onClick={onclick}> buscar</button>
       <button onClick={()=>console.log(infocity)}> ver info de la ciudad</button>
       <button onClick={()=>console.log(weatherinfo)}>ver clima</button>
       <button onClick={()=>console.log(error)}>ver errores</button>

       <div className={style.FirstSection}>

      <section className={style.CardInfo}>
         {!error&&infocity.name&&
         <Cardinfo infocity={infocity} weatherinfo={weatherinfo}/>
       }
       {error&&
         <h1>{error}</h1>
       }
      </section>
      

      <section className={style.MapContainer}>
               <Map onMapclick={onMapclick}  center={centermap}/>
      </section>
         </div>
    
       <div className={style.ForecastContainer}>
           <h1>Forecast </h1>

           {!error&&infocity.name&&
         <ForeCastInfo forecast={forecast}/>
       }
            
        </div> 



        <section>
          <h1>Hours</h1>
          {!error&&infocity.name&&
         <Cardinfo infocity={infocity} weatherinfo={weatherinfo}/>
       }
        </section>
     
    </div>
 )
}