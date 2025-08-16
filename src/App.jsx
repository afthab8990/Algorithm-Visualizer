import { useEffect, useState,props } from 'react'
import './App.css'
import Home from './Home.jsx'
import About from './About.jsx'
import pc1 from  './components/puc.jpg'
import axios from 'axios'
import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom'
import Contacts from './Contacts.jsx'



function App() {

  return (
    <>
        <Router>
            <Link to="/contacts">Go to contacts</Link>
            <Link to="/about">Go to About</Link>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
        </Router>

    </>
  );
}


export default App
