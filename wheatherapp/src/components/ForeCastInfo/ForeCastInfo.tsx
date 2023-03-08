import { useState } from 'react'
import style from './ForeCastInfo.module.css'
type hour={
  time:string,
  temp_c:number,
  temp_f:number,
  condition:{
    text:string,
    icon:string,
  }

}
interface props{
    forecast?:Array<{
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
        },
        hour:Array<hour>
    }>
}
export default function ForeCastInfo ({forecast}:props){
    const Today =new Date()
    var daynumber =Today.getDay()-1

    const days=['Sunday','Monday','Tuesday','Wednesday','thursday','Friday','Saturday']
    
   
    return(
  
       <div className={style.Container}>
         {forecast&&

          forecast.map((i,key)=>{
          daynumber=daynumber===6?0:daynumber=daynumber+1

            return <section key={key}>
            
                <h1>Date: {days[daynumber]}</h1>
                <h2>max: {i.day?.maxtemp_c}</h2>
                <h2>min: {i.day?.mintemp_c}</h2>
                <img src={i.day?.condition.icon} alt="icon" />
             </section>
             }
            )
         }
       </div>
    )
}