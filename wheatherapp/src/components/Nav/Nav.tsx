import style from './Nav.module.css'
export default function Nav(){

    return (
        <div className={style.Nav}>
            <button>Home</button>
            <section>
              <h1>Wheather App.</h1>  
            </section>   
            <button>About</button>
        </div>
    )
}