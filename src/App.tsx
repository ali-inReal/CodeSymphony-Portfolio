import { useEffect } from 'react';
import Home from './components/Home';
import About from './components/About';
import Development from './components/development';
import Projects from './components/Projects';
import Steps from './components/steps';
// import Team from './components/Team';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import './index.css';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
      // Reveal once ~80px of a section is visible. A percentage threshold made
      // tall sections on small screens reveal late (10% of a tall section is a
      // lot of pixels); a fixed pixel margin keeps the timing consistent.
    }, { threshold: 0, rootMargin: '0px 0px -80px 0px' });

    document.querySelectorAll('section').forEach(section => {
      section.classList.add('reveal');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App selection:bg-accent/30 selection:text-ink bg-charcoal">
      <ScrollProgress />

      <Home />
      <About />
      <Development />
      <Projects />
      <Steps />
      {/* <Team /> */}
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
