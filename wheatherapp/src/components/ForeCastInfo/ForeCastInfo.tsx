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
    }>,
    actualSelected:Array<arraydeobj>,
    setActualselected:Function,
    selected:string,
    setSelected:Function,
    spanish:boolean,
    celcius:boolean
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


export default function ForeCastInfo ({forecast,actualSelected,setActualselected,
                                       selected,setSelected,spanish,celcius}:props){
    const Today =new Date()
    var daynumber =Today.getDay()-1

    const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const daysES=['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
    
    const [lastselected,setLastSelected]=useState('0')
   useEffect(()=>{
     let actualselect=document.getElementById(selected)
     let last=document.getElementById(lastselected)
     const action=()=>{
    last&&(last.style.backgroundColor='rgb(207, 220, 236)')
    setLastSelected(selected)
    actualselect&&(actualselect.style.background='rgb(174, 192, 211)');
     }
     action()
   },[selected,lastselected])
   function aux (i:any){
     return celcius? `${i.day?.maxtemp_c&& Math.round(i.day?.maxtemp_c)} c °`:
       `${i.day?.maxtemp_f&& Math.round(i.day?.maxtemp_f)} f °`

   }

    return(
  <div className={style.principalContainer}>
     <div className={style.firstContainer}>
         {forecast&&

          forecast.map((i,key)=>{
          daynumber=daynumber===6?0:daynumber=daynumber+1
            
            return <section key={key}  id={key.toString()}  onClick={(e)=>{
              setActualselected(i.hour)
              setSelected(key.toString())
              ;}}>
            
                <h1> { spanish?daysES[daynumber]:days[daynumber]}</h1>
                <img src={i.day?.condition.icon} alt="icon" />
                <span>max:  {aux(i)}</span>
                 <span>min: {aux(i)}</span> 
               
                
             </section>
             }
            )
         }
       </div>
       <div className={style.secondContainer}>
          {actualSelected&&
            actualSelected.map((i,key)=>
              <section key={key} >
                <h3>Hs: {i.time?.split('').splice(-5)}</h3> <br />
                 <img src={i.condition?.icon}alt="" /> <br />
                 <span>{ celcius?`${i.temp_c} c`:`${i.temp_f} f`} °</span><br />
                 <span>{i.condition?.text}</span>
              </section>
            )
          }
       </div>
  </div>
      
    )
}