import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SignUp from './SignUp';
import Home from './Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
    </Routes>
   </BrowserRouter>
  </React.StrictMode>
);