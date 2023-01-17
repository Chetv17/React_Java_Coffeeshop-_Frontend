import React, { useState, useEffect } from 'react'
import { Route, Routes, Navigate, BrowserRouter as Router } from 'react-router-dom'
import Index from './components/Index'
import Nav from './components/Nav'

import './App.css';

const App = () => {
  return (
  
  <>

    <Router>
      <Routes>      
         <Route path='/' element={<>
            <Nav />
            <Index />
            </>} 
          /> 

      </Routes>
    </Router>
  </>

  )
}

export default App;
