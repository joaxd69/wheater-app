import style from './Nav.module.css'
export default function Nav(){

    return (
        <div className={style.Nav}>
            <section>
              <h1>Soy el nav</h1>  
            </section>

            <section>
               <button>Inicio</button>
               <button>About</button>
            </section>
            
        </div>
    )
}