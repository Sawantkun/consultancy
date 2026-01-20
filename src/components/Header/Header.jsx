import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          LOGO<span>text</span>
        </div>
        <nav className="nav">
          <a href="#home" className="nav-link active">
            Home
          </a>
          <div className="nav-dropdown">
            <a href="#offerings" className="nav-link">
              Offerings <span className="dropdown-arrow">▼</span>
            </a>
            <div className="dropdown-menu">
              <a href="#services">Services</a>
              <a href="#solutions">Solutions</a>
              <a href="#consulting">Consulting</a>
            </div>
          </div>
          <a href="#resources" className="nav-link">
            Resources
          </a>
          <div className="nav-dropdown">
            <a href="#opportunity" className="nav-link">
              Opportunity <span className="dropdown-arrow">▼</span>
            </a>
            <div className="dropdown-menu">
              <a href="#programs">Programs</a>
              <a href="#partnerships">Partnerships</a>
            </div>
          </div>
          <a href="#careers" className="nav-link">
            Careers
          </a>
          <a href="#contact" className="nav-link">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
