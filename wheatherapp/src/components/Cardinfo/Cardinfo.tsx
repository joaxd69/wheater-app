import style from './Cardinfo.module.css'
interface props{
    infocity:{
  name?:string,
  region?:string,
  country?:string,
  localtime?:string
};
 weatherinfo:{
  temp_c?:number,
  uv?:number,
  wind_kph?:string,
  localtime?:string,
  condition?:{text:string,icon:string,code:number}
}
}

export default function Cardinfo({infocity,weatherinfo}:props){
   return (
    
        <div className={style.Container}>
            <h1>{infocity.name}</h1>
            <span>{infocity.region}</span>
            <span>,{infocity.country}</span>
             <section className={style.firstSection}>
                <img src={weatherinfo.condition?.icon} alt="" /> <br />
                <span>{weatherinfo.temp_c} grados</span> <br />
                <span>{weatherinfo.condition?.text}</span> <br />
                <span> Vientos de {weatherinfo.wind_kph} kph</span> <br />
                <span>Indice UV: {weatherinfo.uv}</span><br />
                <span>Hora local :{infocity.localtime}</span>
             </section>
       </div>
   )
}