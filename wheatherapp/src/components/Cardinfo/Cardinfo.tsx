import style from './Cardinfo.module.css'
import icon1 from '../../assets/windicon.jpg'
interface props{
    infocity:{
  name?:string,
  region?:string,
  country?:string,
  localtime?:string
};
 weatherinfo:{
  temp_c?:number,
  temp_f?:number,
  uv?:number,
  wind_kph?:string,
  localtime?:string,
  condition?:{text:string,icon:string,code:number}
};
forecast:Array<{
   date?:string,
   date_epoch?:number,
   day?:{
       condition:{
           text:string,
           icon:string,
         }
       maxtemp_c?:number,
       mintemp_c?:number,
       maxtemp_f?:number,
       mintemp_f?:number,
   }
}>,
spanish:boolean,
celcius:boolean
}

export default function Cardinfo({infocity,weatherinfo,forecast,spanish,celcius}:props){
   const am_or_pm=(time:any)=>{
    let reduce=time.split('').splice(-5).join('')
   return parseInt(reduce.split('').splice(0,2).join(''))>12?
          `${reduce} pm`:`${reduce} am`
   }
   const currentwheather=celcius?`${weatherinfo.temp_c} c°`: `${weatherinfo.temp_f} f °`
   let max =`${forecast[0].day?.maxtemp_c && Math.ceil(forecast[0].day?.maxtemp_c)} c°`
   let min =`${forecast[0].day?.mintemp_c && Math.floor(forecast[0].day?.mintemp_c)} c°`
   let maxf =`${forecast[0].day?.maxtemp_f && Math.ceil(forecast[0].day?.maxtemp_f)} f°`
   let minf =`${forecast[0].day?.mintemp_f && Math.ceil(forecast[0].day?.mintemp_f)} f°`
   return (
    
        <div className={style.Container}>
           <section className={style.LocationContainer}>
            <h1>{infocity.name}</h1>
            <span>,{infocity.region},{infocity.country}</span>
            <i>{ am_or_pm(infocity.localtime)}</i>
           </section>
             <section className={style.firstSection}>

                <article className={style.wheatherInfo}>
                   <h1>{currentwheather}</h1>  
                   <i>{weatherinfo.condition?.text}</i> 
                   <section className={style.MaxMin}>
                     <span>Max:{celcius?max:maxf}</span>
                      <span>Min:{celcius?min:minf}</span>
                   </section>
                   <span> {spanish?'Vientos':'Winds'}: {weatherinfo.wind_kph} kph <img src={icon1} alt="" width={5} height={5} />  </span><br />
                  <span>{spanish?'Indice UV':'UV index'}: {weatherinfo.uv}</span> 
                </article>
                <article className={style.imginfo}>
                  <img src={weatherinfo.condition?.icon} alt="" /> <br />
                </article>
             </section>
       </div>
   )
}