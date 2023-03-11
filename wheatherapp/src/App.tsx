import './App.css';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import {Route,Routes} from 'react-router-dom'
import {useState} from 'react'
import About from './components/About/About';
function App() {
  const [celcius,setCelcius]=useState(true)
  const [spanish,setSpanish]=useState(true)
  const changeLanguage=(e:any)=>{
    e.target.value==='es'?setSpanish(true):setSpanish(false)
  

  }
  return (
    <div className="App">
      <Nav spanish={spanish} setSpanish={setSpanish}/>
      <section className='LanguageSection'>
         <span>{spanish?'Cambiar idioma :':'Change Language :'}</span>
         <select onChange={changeLanguage}>
        <option value="es">{spanish?'Español':'Spanish'}</option>
        <option value="en">{!spanish?'English':'Ingles'}</option>
      </select>
      </section>
     
      <Routes>
        <Route path='/'element={<Home  spanish={spanish} celcius={celcius}/>}/>
        <Route path='/about' element={<About spanish={spanish}/>}/>
      </Routes>
     
       
    </div>
  );
}

export default App;
