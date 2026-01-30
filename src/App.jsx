import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AnimatedBackground from './components/Background/AnimatedBackground';
import Home from './pages/Home';
import OurMission from './pages/OurMission';
import OurVision from './pages/OurVision';
import Services from './pages/Services';
import WhyChooseUs from './pages/WhyChooseUs';
import Industries from './pages/Industries';
import Contact from './pages/Contact';
import useScrollReveal from './hooks/useScrollReveal';
import './App.css';

function App() {
  useScrollReveal();

  return (
    <div className="app">
      <AnimatedBackground />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<OurMission />} />
          <Route path="/vision" element={<OurVision />} />
          <Route path="/services" element={<Services />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
