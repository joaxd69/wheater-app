import style from './About.module.css'
import linkedinicon from '../../assets/linkedinicon.jpg'
import githubicon from '../../assets/githubicon.png'
import mailicon from '../../assets/mailicon.jpg'
import portfolioicon from '../../assets/portfolioicon.jpg'
import whatsappicon from '../../assets/whatsappicon.jpg'
// import linkedinicon from '../../assets/linkedinicon.jpg'
export default function AboutEn(){
    return(
        <div className={style.FirstContainer}>

            <div className={style.AboutApp}>
            <h1>About <i>Wheater App</i></h1>
            <p>
            Web app created by
             <i><a href="https://www.linkedin.com/in/joaquin-garcia-392a9a259/" target='_blank'> Joaquin Garcia</a> </i> , made with TypeScript and React.js <br />

             For styling the application I used pure Css, to receive the meteorological I have integrated the api from 
           <i><a href="https://www.weatherapi.com/" target='_blank'> WheatherApi.com</a></i> ,
          and <i><a href="https://www.google.com.ar/maps" target='_blank'>Google Maps</a></i> api
           </p> 
            </div>
         

           <div className={style.Aboutme}>
            <h1>About me</h1>
              <span>
              My name is joaquin, I'm a full stack web developer, you can contact me if you have a proposal for me
                about web development, work or not.
              </span>
               <section>
                <span>
                My linkedin: <a href="https://www.linkedin.com/in/joaquin-garcia-392a9a259/">https://www.linkedin.com/in/joaquin-garcia-392a9a259/</a>
              </span>
              <a href="https://www.linkedin.com/in/joaquin-garcia-392a9a259/">
                    <img src={linkedinicon} alt="" /> 
              </a>
         
               </section>
               <section>
                <span>
                My GitHub: <a href="https://github.com/joaxd69">https://github.com/joaxd69</a>
              </span>
              <a href="https://github.com/joaxd69">
                 <img src={githubicon} alt="" />
                </a>
             
               </section>
               <section>
                <span>
                My email:  <a href='mailto:joakig6@gmail.com'> joakig6@gmail.com    </a> 
              </span>
              <a href='mailto:joakig6@gmail.com'> 
               <img src={mailicon} alt="" />
              </a>
               </section>
               <section>
                <span>
                My phone number:<a className={style.ContactLinks} href="https://wa.me/+5492216300954?" target="_blank">+542216300954</a>
              </span>
              <a className={style.ContactLinks} href="https://wa.me/+5492216300954?" target="_blank">
                 <img src={whatsappicon} alt="" />
              </a>
             
               </section>
               <section>
                <span>
                My portfolio:<a className={style.ContactLinks} href="https://miportfolio-joaquin.vercel.app/" target="_blank">Mi portfolio</a>
              </span>
              :<a className={style.ContactLinks} href="https://miportfolio-joaquin.vercel.app/" target="_blank">
                  <img src={portfolioicon} alt="" />
              </a>
            
               </section>
              
           </div>
        </div>
    )
}