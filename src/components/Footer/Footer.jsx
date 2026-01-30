import './Footer.css';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <img src="/logo.png" alt="ASC IT Services" className="logo-image" />
            </Link>
            <p className="motto">"Connecting Talent. Empowering Technology."</p>
            <div className="vision-mission">
              <div className="vm-item">
                <h4>Vision</h4>
                <p>To be a trusted global partner in recruitment and IT services, enabling organizations to grow through exceptional talent, innovative technology, and long-term value creation.</p>
              </div>
              <div className="vm-item">
                <h4>Mission</h4>
                <p>Our mission is to deliver reliable recruitment and IT solutions by connecting the right people with the right opportunities and empowering businesses with scalable, future-ready technology. We are committed to quality, integrity, and customer success in every engagement.</p>
              </div>
            </div>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Company</h4>
              <a href="#about">About Us</a>
              <a href="#services">Services</a>
              <a href="#why-choose-us">Why Choose Us</a>
              <a href="#industries">Industries</a>
            </div>
            <div className="link-group">
              <h4>Connect</h4>
              <a href="#contact">Contact Us</a>
              <a href="#">Careers</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ASC IT Services. All rights reserved.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/company/asc-it-services/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/people/ASC-It-Services/61587050888771/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/ascitservices?utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
