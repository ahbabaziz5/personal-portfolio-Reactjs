import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Footer from './component/Footer';
import { useState } from 'react';

function App() {
  const[loading,setLoading]=useState(true)
  setTimeout(()=>{
setLoading(false)
  },1000)
  return (
    <div>
    {
      !loading ? 
      <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Footer/>
      </>:
      <div className="loader-container">
     <div class="loader"></div>

    </div>
    }
  
   </div>
  );
}

export default App;
