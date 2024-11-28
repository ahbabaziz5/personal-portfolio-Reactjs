import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Footer from './component/Footer';

function App() {
  return (
    <>
   <Navbar/>
   <Hero/>
   <About/>
   <Skills/>
   <Projects/>
   <Footer/>
   </>
  );
}

export default App;
