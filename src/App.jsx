import React from 'react'
import Pets from './Pets';
import SearchParams from './SearchParams';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.css';
import './index'

import Details from './Details';

const App = () => {
  return (
    <BrowserRouter>
      <h1>Adopt Me!</h1>
      <Routes>
        <Route path='/' element={<SearchParams />} />
        <Route path='/details:/id' element ={<Details />} />
      </Routes>
      <Pets />
    </BrowserRouter>
  )
}

export default App
