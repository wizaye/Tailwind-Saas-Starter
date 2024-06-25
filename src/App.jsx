import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home'; // Remove curly braces around Home
import Blog from './pages/Blog'; 
import About from './pages/Aboutus';
import Team from './pages/Team';
import Contact from './pages/Contactus';
import Causes from './pages/Causes';
import NotFound from './pages/NotFound';
import Gallery from './pages/Gallery';
import Navbar from './components/Navbar';


const App = () => {

  return (
    <div>
      <div className="bg-white">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/causes" element={<Causes/>} />
          <Route path="/contactus" element={<Contact/>} />
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </div>
    </div>
  );
};

export default App;
