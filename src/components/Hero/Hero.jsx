import './Hero.css';
import heroImage from '../../assets/ai_talent_hero_dim_visual_1768893244381.png';
import { FaBullseye, FaLaptopCode } from 'react-icons/fa';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Hero = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (location.pathname === '/') {
      // If on home page, scroll to contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const headerOffset = 100; // Account for fixed header
        const elementPosition = contactSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // If on another page, navigate to home and then scroll
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          const headerOffset = 100; // Account for fixed header
          const elementPosition = contactSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  const handleLearnMore = () => {
    if (location.pathname === '/') {
      // If on home page, scroll to about section
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const headerOffset = 100; // Account for fixed header
        const elementPosition = aboutSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // If on another page, navigate to home and then scroll
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          const headerOffset = 100; // Account for fixed header
          const elementPosition = aboutSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">Your Strategic Partner in Growth</div>
            <h1 className="hero-title">
              Connecting Talent <br />
              <span>& Technology</span>
            </h1>
            <p className="hero-description">
              We deliver end-to-end recruitment and IT services that help businesses scale faster, innovate smarter, and stay ahead of the competition.
            </p>
            
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={handleGetStarted}>Get Started</button>
              <button className="btn btn-secondary" onClick={handleLearnMore}>Learn More</button>
            </div>

            <div className="hero-trust">
              <div className="avatar-group">
                <img src="https://i.pravatar.cc/100?u=1" alt="Member" />
                <img src="https://i.pravatar.cc/100?u=2" alt="Member" />
                <img src="https://i.pravatar.cc/100?u=3" alt="Member" />
                <div className="avatar-more">+131k</div>
              </div>
              <p>Trusted by industrial leaders worldwide</p>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="visual-container">
              <div className="glow-effect"></div>
              <img src={heroImage} alt="AI Talent Visual" className="main-visual" />
              <Link to="/services" className="floating-card card-1">
                <span><FaBullseye /></span> Recruitment & Staffing
              </Link>
              <Link to="/services" className="floating-card card-2">
                <span><FaLaptopCode /></span> IT Services & Consulting
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
