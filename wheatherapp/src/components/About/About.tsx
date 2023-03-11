import AboutEn from "./AboutEn"
import AboutEs from "./AboutEs"

interface props{
    spanish:boolean
}
export default function About({spanish}:props){
    return(
       spanish?<AboutEs/>:
       <AboutEn/>
    )
}