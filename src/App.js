import React from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Experience from './components/Experience';
import MathBackground from './components/MathBackground';
import ScrollToTop from './components/ScrollToTop';
import Research from './components/Research';

const App = () => {
  return (
    <div className='bg-gradient-to-br from-emerald-50 to-cyan-50 bg-no-repeat bg-cover overflow-hidden relative'>
      <MathBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <Banner />
        <Nav />
        <About />
        <Services />
        <Research />
        <Experience />
        <Work />
        <Contact />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default App;
