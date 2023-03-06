import './App.css';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import {Route,Routes} from 'react-router-dom'
import Map from './components/Map/Map';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/'element={<Home />}/>
      </Routes>
     
       
    </div>
  );
}

export default App;
