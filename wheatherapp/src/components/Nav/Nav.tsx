import { Link } from 'react-router-dom'
import style from './Nav.module.css'
interface props{
  spanish:boolean,
  setSpanish:Function
}
export default function Nav({spanish,setSpanish}:props){
    // const changeLanguage=()=>{
    //   spanish?setSpanish(false):setSpanish(true)
    

    // }
    return (
        <div className={style.Nav}>
            
            <Link to={'/'}>
            <button>Home</button>
            </Link>
            
            <section>
              <h1>Wheather App.</h1>  
            </section>  
            <Link to={'/About'}>
            <button>About</button>
            </Link> 
        </div>
    )
}