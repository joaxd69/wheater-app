import { Link } from 'react-router-dom'
import style from './Nav.module.css'
export default function Nav(){
 
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