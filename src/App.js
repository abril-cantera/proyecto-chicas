import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Jobs from './components/Jobs'
import Turns from './components/Turns'
import Servicios from './components/Servicios';
import { Menu } from './components/Menu'


function App() {

  return (
    <HashRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/turns' element={<Turns />} />
        <Route path='/services' element={<Servicios />} />
        <Route path='*' element={<p> Not found</p>} />
      </Routes>
    </HashRouter>
  )

}

export default App;
