import { useState, useEffect } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const location = useLocation();

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

  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      closeMenu();
    }
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
        <Link to="/" className="logo">
          <img src="/logo.png" alt="ASC IT Services" className="logo-image" />
        </Link>
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
            <button className="mobile-close-btn" onClick={closeMenu} aria-label="Close menu">
              <span>×</span>
            </button>
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={handleHomeClick} end>
              Home
            </NavLink>
            <div className="nav-dropdown">
              <a 
                href="#" 
                className={`nav-link ${(location.pathname === '/mission' || location.pathname === '/vision') ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown('about-us');
                }}
              >
                About Us <span className={`dropdown-arrow ${activeDropdown === 'about-us' ? 'active' : ''}`}>▼</span>
              </a>
              <div className={`dropdown-menu ${activeDropdown === 'about-us' ? 'active' : ''}`}>
                <NavLink to="/vision" onClick={closeMenu}>Our Vision</NavLink>
                <NavLink to="/mission" onClick={closeMenu}>Our Mission</NavLink>
              </div>
            </div>
          <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            Services
          </NavLink>
          <NavLink to="/why-choose-us" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            Why Choose Us
          </NavLink>
          <NavLink to="/industries" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            Industries
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            Contact Us
          </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
