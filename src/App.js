import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector,useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Product from './Product';
import Single from './Single'
function App() {


  return (
      <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='/single' element={<Single/>}/>

      </Routes>
  );
}

export default App;
