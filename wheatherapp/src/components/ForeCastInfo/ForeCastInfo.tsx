import { useEffect, useState } from 'react'
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
interface arraydeobj{
  time?:string,
  temp_c?:number,
  temp_f?:number,
  condition?:{
    text:string,
    icon:string,
  }
}

export default function ForeCastInfo ({forecast}:props){
    const Today =new Date()
    var daynumber =Today.getDay()-1
    const [actualSelected,setActualSelected]=useState<arraydeobj[]>([])
    const days=['Sunday','Monday','Tuesday','Wednesday','thursday','Friday','Saturday']
    const [selected,setSelected]=useState('1')
    const [lastselected,setLastSelected]=useState('1')
   useEffect(()=>{
     let actualselect=document.getElementById(selected)
     let last=document.getElementById(lastselected)
     const action=()=>{
    last&&(last.style.backgroundColor='blue')
    setLastSelected(selected)
    actualselect&&(actualselect.style.background='yellow');
     }
     action()
   },[selected])

    return(
  <div className={style.principalContainer}>
     <div className={style.firstContainer}>
         {forecast&&

          forecast.map((i,key)=>{
          daynumber=daynumber===6?0:daynumber=daynumber+1
        
            return <section key={key}  id={key.toString()}  onClick={(e)=>{
              setActualSelected(i.hour)
              setSelected(key.toString())
              ;}}>
            
                <h1>Date: {days[daynumber]}</h1>
                <h2>max: {i.day?.maxtemp_c}</h2>
                <h2>min: {i.day?.mintemp_c}</h2>
                <img src={i.day?.condition.icon} alt="icon" />
             </section>
             }
            )
         }
       </div>
       <div className={style.secondContainer}>
          {actualSelected.length&&
            actualSelected.map(i=>
              <section >
                <h3>hs :{i.time?.split('').splice(-5)}</h3> <br />
                 <img src={i.condition?.icon}alt="" /> <br />
                 <span>{i.temp_c} c°</span><br />
                 <span>{i.condition?.text} c°</span>
              </section>
            )
          }
       </div>
  </div>
      
    )
}