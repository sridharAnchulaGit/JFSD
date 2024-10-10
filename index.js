import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login';
import Home from './home'
import State from './state';
import Traditions from './traditions';
import About from './about';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function Website(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path='/home' element={<Home/>} />
        <Route path="/" component={Home} />
        
        <Route path="/states" element={<State />} />
        <Route path="/traditions" element={<Traditions />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </BrowserRouter>

    // <div className='full-height'>
    //   <Home/>
    //   <Login/>
    // </div>
  );
}

ReactDOM.render(<Website/>, document.getElementById('root'));