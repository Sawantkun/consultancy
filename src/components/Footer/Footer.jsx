import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">ASC<span>IT Services</span></div>
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
          <p>&copy; 2024 ASC IT Services. All rights reserved.</p>
          <div className="social-links">
            <a href="#" aria-label="LinkedIn">LN</a>
            <a href="#" aria-label="Twitter">TW</a>
            <a href="#" aria-label="Instagram">IG</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
