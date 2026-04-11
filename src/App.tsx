import  { useEffect } from 'react';
import Home from './components/Home';
import Development from './components/development';
import Projects from './components/Projects';
import Steps from './components/steps';
import Team from './components/Team';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import DigitalGhostBackground from './components/DigitalGhostBackground';
import ZSpaceSystem from './components/ZSpaceSystem';
import About from './components/About';
import Footer from './components/Footer';
import Contac from './components/Contac';
import './index.css';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section, footer').forEach(section => {
      section.classList.add('reveal');
      observer.observe(section);
    });
  }, []);

  return (
    <div className="App selection:bg-accent/30 selection:text-white bg-charcoal">
      <DigitalGhostBackground />
      <div className="noise-overlay" />
      <CustomCursor />
      <ScrollProgress />
      <ZSpaceSystem />
      
      <Home />
      <About />
      <Projects />
      <Steps />
      <Development />
      <Team />
      <Contac />
      <Footer />
    </div>
  );
}

export default App;
