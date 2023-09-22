import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Recipe from './Components/Recipes/Recipe';
import Main from './Components/Main';
import ShahiPaneer from './Components/Recipes/Dishes/ShahiPaneer';
import ChilliGobhi from './Components/Recipes/Dishes/ChilliGobhi';
import VadaPaw from './Components/Recipes/Dishes/VadaPaw';
import HoneyChilli from './Components/Recipes/Dishes/HoneyChilli';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/shahipaneer' element={<ShahiPaneer/>}></Route>
        <Route path='/chilligobhi' element={<ChilliGobhi/>}></Route>
        <Route path='/vada' element={<VadaPaw/>}></Route>
        <Route path='/honeychillipotato' element={<HoneyChilli/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
