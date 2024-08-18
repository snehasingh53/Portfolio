import  React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';



const App =()=> {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
    </div>
  )


}

export default App;