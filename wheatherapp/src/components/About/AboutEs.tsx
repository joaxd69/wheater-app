import style from './About.module.css'
import linkedinicon from '../../assets/linkedinicon.jpg'
import githubicon from '../../assets/githubicon.png'
import mailicon from '../../assets/mailicon.jpg'
import portfolioicon from '../../assets/portfolioicon.jpg'
import whatsappicon from '../../assets/whatsappicon.jpg'
// import linkedinicon from '../../assets/linkedinicon.jpg'
export default function AboutEs(){
    return(
        <div className={style.FirstContainer}>

            <div className={style.AboutApp}>
            <h1>Acerca de  <i>Wheater App</i></h1>
            <p>
            Aplicacion web creada por
             <i><a href="https://www.linkedin.com/in/joaquin-garcia-392a9a259/" target='_blank'> Joaquin Garcia</a> </i> , realizada con TypeScript y React.js <br />

            Para estilizar la aplicacion he utilzado Css puro, para recibir los datos 
            meteorologicos he integrado la api de 
           <i><a href="https://www.weatherapi.com/" target='_blank'> WheatherApi.com</a></i> ,
           y la api de <i><a href="https://www.google.com.ar/maps" target='_blank'>Google Maps</a></i>
           </p> 
            </div>
         

           <div className={style.Aboutme}>
            <h1>Acerca de mi</h1>
              <span>
                Me llamo joaquin, soy desarrollador web full stack.Puedes contactarme si tienes una propuesta para mi
                sobre desarrollo web, sea laboral o no.
              </span>
               <section>
                <span>
                Mi linkedin: <a href="https://www.linkedin.com/in/joaquin-garcia-392a9a259/">https://www.linkedin.com/in/joaquin-garcia-392a9a259/</a>
              </span>
              <a href="https://www.linkedin.com/in/joaquin-garcia-392a9a259/">
                    <img src={linkedinicon} alt="" /> 
              </a>
         
               </section>
               <section>
                <span>
                Mi GitHub: <a href="https://github.com/joaxd69">https://github.com/joaxd69</a>
              </span>
              <a href="https://github.com/joaxd69">
                 <img src={githubicon} alt="" />
                </a>
             
               </section>
               <section>
                <span>
                Mi correo electronico:  <a href='mailto:joakig6@gmail.com'> joakig6@gmail.com    </a> 
              </span>
              <a href='mailto:joakig6@gmail.com'> 
               <img src={mailicon} alt="" />
              </a>
               </section>
               <section>
                <span>
                Mi numero:<a className={style.ContactLinks} href="https://wa.me/+5492216300954?" target="_blank">+542216300954</a>
              </span>
              <a className={style.ContactLinks} href="https://wa.me/+5492216300954?" target="_blank">
                 <img src={whatsappicon} alt="" />
              </a>
             
               </section>
               <section>
                <span>
                Mi portfolio:<a className={style.ContactLinks} href="https://miportfolio-joaquin.vercel.app/" target="_blank">Mi portfolio</a>
              </span>
              :<a className={style.ContactLinks} href="https://miportfolio-joaquin.vercel.app/" target="_blank">
                  <img src={portfolioicon} alt="" />
              </a>
            
               </section>
              
           </div>
        </div>
    )
}