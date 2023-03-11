import './App.css';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import {Route,Routes} from 'react-router-dom'
import {useState} from 'react'
function App() {
  const [celcius,setCelcius]=useState(true)
  const [spanish,setSpanish]=useState(true)
 
  return (
    <div className="App">
      <Nav spanish={spanish} setSpanish={setSpanish}/>
      <Routes>
        <Route path='/'element={<Home  spanish={spanish} celcius={celcius}/>}/>
      </Routes>
     
       
    </div>
  );
}

export default App;
