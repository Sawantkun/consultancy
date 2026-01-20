import './Hero.css';
import heroImage from '../../assets/ai_talent_hero_dim_visual_1768893244381.png';

const Hero = () => {
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
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-secondary">Learn More</button>
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
              <div className="floating-card card-1">
                <span>🎯</span> Recruitment & Staffing
              </div>
              <div className="floating-card card-2">
                <span>💻</span> IT Services & Consulting
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
