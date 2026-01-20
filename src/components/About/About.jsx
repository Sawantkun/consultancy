import './About.css';

const About = () => {
  return (
    <section id="about" className="about reveal reveal-up">
      <div className="about-container">
        <div className="about-content">
          <div className="about-visual reveal reveal-left">
            <div className="about-glass-illustration">
              <div className="glass-shape shape-1"></div>
              <div className="glass-shape shape-2"></div>
              <div className="glass-shape shape-3"></div>
              <div className="glass-node node-1"></div>
              <div className="glass-node node-2"></div>
            </div>
          </div>
          <div className="about-text reveal reveal-right">
            <h2 className="section-title">Redefining <span>Human Potential</span></h2>
            <p className="section-description">
              At company name, we're not just a consultancy; we're the bridge between ambitious enterprises and world-class talent. Our AI-driven approach ensures that every match is more than just a placement—it's a strategic alignment for growth.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <h3>15+</h3>
                <p>Years of Excellence</p>
              </div>
              <div className="stat-item">
                <h3>500+</h3>
                <p>Global Partners</p>
              </div>
              <div className="stat-item">
                <h3>10k+</h3>
                <p>Successful Placements</p>
              </div>
            </div>
            <button className="btn btn-secondary">Our Story</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
