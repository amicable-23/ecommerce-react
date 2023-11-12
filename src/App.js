import logo from './logo.svg';
import './App.css';
import {FaBagShopping} from "react-icons/fa6"
import {AiOutlineLaptop} from "react-icons/ai"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Details from './Pages/Details';
import Checkout from './Pages/Checkout';
import Cart from './Pages/Cart';

import Navbar from './Common/Navbar';
import Footer from "./Common/Footer";

function App() {
 return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/details/:id' element={<Details/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
 )
}

export default App;
