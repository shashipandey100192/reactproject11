import React from 'react';
import ReactDOM from 'react-dom/client';
import Navebar from './Components/Navebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Traval from './Components/Traval';
import Use from './Components/Cars/Use';
// import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Navebar/>
    <Routes>
      <Route path='Home' element={<Home/>}/> 
      <Route path='About' element={<About/>}/> 
      <Route path='traval' element={<Traval/>}/> 
      <Route path='cars' element={<Use/>}/> 
    </Routes>
   </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
