import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import {useState,useEffect} from 'react'
import style from './Map.module.css'

interface props{
    onMapclick:Function
    center:{lat:number,lng:number}
}

export default function Map ({onMapclick,center}:props){
    const {isLoaded}= useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey:'AIzaSyBxRKT9oBJQNJ_ibqWi_Cwt97Z_WVLGkmg'
    })/// configuramos cuando es cargado el mapa
    const [actuallocation,setActualLocation]=useState({lat:0,lng:0})///ubicacion actual
    useEffect(()=>{
        const actuallocation=()=>{
            navigator.geolocation.getCurrentPosition((position)=>{
              const lat = position.coords.latitude
              const long = position.coords.longitude
              setActualLocation({lat,lng:long})
              })
            }
            actuallocation()
    },[])///antes de que se monte el componente , en el mapa establecemos la

    const [map, setMap] = useState<google.maps.Map | null>(null);
    
    const containerStyle = {
        height: '400px',
        margin: '0 auto'
      };
      const [mapPosition, setMapPosition] = useState({ lat: 0, lng: 0 });

      const handleMapClick = (event:any) => {
        onMapclick(`${event.latLng.lat()},${event.latLng.lng()}`)
        setMapPosition({
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
          });
      };

      const options = {
        disableDefaultUI: true,
        zoomControl: true
      };
    if(!isLoaded){
        return <h1>cargando...</h1>
    }

  
 return(
    <div className={style.MapContainer}>
    <GoogleMap  mapContainerStyle={containerStyle} 
    center={center} zoom={12} onClick={handleMapClick}
    options={options} onLoad={(map)=>setMap(map)}>  
    </GoogleMap>
    <Marker position={center} />
    <Marker position={{ lat: mapPosition.lat, lng: mapPosition.lng }} />
    </div>
 )
}