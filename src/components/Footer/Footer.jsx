import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">logo<span>name</span></div>
            <p>Intelligence-driven talent solutions for the next generation of industry leaders.</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Platform</h4>
              <a href="#services">Services</a>
              <a href="#about">About Us</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="link-group">
              <h4>Resources</h4>
              <a href="#">Careers</a>
              <a href="#">Insights</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Consultancy. All rights reserved.</p>
          <div className="social-links">
            <a href="#">LN</a>
            <a href="#">TW</a>
            <a href="#">IG</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
