import { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.header')) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu on scroll for mobile
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen && window.innerWidth <= 1024) {
        closeMenu();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  return (
    <>
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            LOGO<span>text</span>
          </div>
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link active" onClick={closeMenu}>
            Home
          </a>
          <div className="nav-dropdown">
            <a 
              href="#offerings" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown('offerings');
              }}
            >
              Offerings <span className="dropdown-arrow">▼</span>
            </a>
            <div className={`dropdown-menu ${activeDropdown === 'offerings' ? 'active' : ''}`}>
              <a href="#services" onClick={closeMenu}>Services</a>
              <a href="#solutions" onClick={closeMenu}>Solutions</a>
              <a href="#consulting" onClick={closeMenu}>Consulting</a>
            </div>
          </div>
          <a href="#resources" className="nav-link" onClick={closeMenu}>
            Resources
          </a>
          <div className="nav-dropdown">
            <a 
              href="#opportunity" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown('opportunity');
              }}
            >
              Opportunity <span className="dropdown-arrow">▼</span>
            </a>
            <div className={`dropdown-menu ${activeDropdown === 'opportunity' ? 'active' : ''}`}>
              <a href="#programs" onClick={closeMenu}>Programs</a>
              <a href="#partnerships" onClick={closeMenu}>Partnerships</a>
            </div>
          </div>
          <a href="#careers" className="nav-link" onClick={closeMenu}>
            Careers
          </a>
          <a href="#contact" className="nav-link" onClick={closeMenu}>
            Contact Us
          </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
