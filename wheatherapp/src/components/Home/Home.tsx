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
interface arraydeobj{
  time?:string,
  temp_c?:number,
  temp_f?:number,
  condition?:{
    text:string,
    icon:string,
  }
}

export default function Home (){
 
  const [actualSelected,setActualSelected]=useState<arraydeobj[]>([])
     const [city,setCity]=useState('')
     const [infocity,setInfoCity]=useState<infoapi>({})
     const [forecast,setForeCast]=useState([])
     const [error,setError]=useState('')
     const [weatherinfo,setWeatherInfo]=useState<weather>({})
     const [centermap,setCenterMap]=useState <center>({lat:0,lng:0})
     const [selected,setSelected]=useState('0')
      useEffect(()=>{
      const actuallocation=()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
          const lat = position.coords.latitude
          const long = position.coords.longitude
          fetch(`https://api.weatherapi.com/v1/forecast.json?key=e019ca05994d40b1a2c32420231301&q=${lat},${long}&lang=es&days=5`)
         .then(response=>response.json())
         .then(data=>{
           document.title=`Wheater App-${data.location.name}`
           data.error?setError(data.error.message):setError('')
           setInfoCity(data.location);
           setWeatherInfo(data.current)
           setForeCast(data.forecast.forecastday)
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
           document.title=`Wheater App-${data.location.name}`
           setInfoCity(data.location);
           setForeCast(data.forecast.forecastday)
           setWeatherInfo(data.current)
           setCenterMap({lat:data.location.lat,lng:data.location.lon})
           setActualSelected(data.forecast.forecastday[selected].hour)
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
        document.title=`Wheater App-${data.location.name}`
        setInfoCity(data.location);
        setWeatherInfo(data.current)
        setActualSelected(data.forecast.forecastday[selected].hour)
      })
      .catch(error=>console.log(error))
    }
    const onChange =(e:any)=>{
      setCity(e.target.value)
      e.target.value.length<1&&navigator.geolocation.getCurrentPosition((position)=>{
        const lat = position.coords.latitude
        const long = position.coords.longitude
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=e019ca05994d40b1a2c32420231301&q=${lat},${long}&lang=es&days=5`)
       .then(response=>response.json())
       .then(data=>{
         document.title=`Wheater App-${data.location.name}`
         data.error?setError(data.error.message):setError('')
         setInfoCity(data.location);
         setWeatherInfo(data.current)
         setForeCast(data.forecast.forecastday)
         setCenterMap({lat,lng:long})           
       })
       .catch(error=>console.log(error))
      })
    }
    return(
    <div>
        <section className={style.searchSection}>
        <input value={city} onChange={onChange }placeholder={'escribe una ubicacion'} />
       <button onClick={onclick}> buscar</button>
        </section>
       {!error&&<div className={style.FirstSection}>

      <section className={style.CardInfo}>
         {!error&&infocity.name&&
         <Cardinfo infocity={infocity} weatherinfo={weatherinfo} forecast={forecast}/>
       }
      </section>
      

      <section className={style.MapContainer}>
               <Map onMapclick={onMapclick}  center={centermap}/>
      </section>
         </div>}
    
       <div className={style.ForecastContainer}>
           {!error&& forecast.length&&
         <ForeCastInfo forecast={forecast} actualSelected={actualSelected} selected={selected} 
         setSelected={setSelected}
         setActualselected={setActualSelected}/>
       }
            
        </div> 


     
    </div>
 )
}