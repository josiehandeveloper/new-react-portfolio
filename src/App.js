import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/intro';
import Projects from './components/Projects/projects';
import Footer from './components/Footer/footer';
import About from './components/About/about';
import Contact from './components/Contact/contact';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
