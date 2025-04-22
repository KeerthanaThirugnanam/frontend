import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Chatbot from './components/Chatbot.js';
import About from './components/About.js';
import Home from './components/Home.js'; 
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <nav>
        <ul class="nav nav-pills nav-fill">
          <li class="nav-item">
          <Link to="/"><a class="nav-link" aria-current="page" >Home </a></Link>
          </li>
          <li class="nav-item">
          <Link to="/chat"><a class="nav-link" aria-current="page">Chatbot</a></Link>
          </li>
          <li class="nav-item">
          <Link to="/about"><a class="nav-link" aria-current="page">About</a></Link>
          </li>

        </ul>


          {/* <ul>
            <li>
              <Link to="/">Home</Link> 
            </li>
            <li>
              <Link to="/chat">Chatbot</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul> */}
        </nav>
       
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/chat" element={<Chatbot />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
