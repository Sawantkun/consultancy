import './About.css';

const About = () => {
  return (
    <section id="about" className="about reveal reveal-up">
      <div className="about-container">
        <div className="about-content">
          <div className="about-visual reveal reveal-left">
            <div className="about-image-container">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop&q=80" 
                alt="ASC IT Services Team" 
                className="about-image"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
          <div className="about-text reveal reveal-right">
            <h2 className="section-title">About <span>ASC IT Services</span></h2>
            <p className="section-description">
              At ASC IT Services, we connect exceptional talent with forward-thinking organizations and deliver high-impact IT solutions that fuel growth, efficiency, and innovation. Combining deep industry expertise in recruitment and IT services, we partner with businesses of all sizes to solve their most pressing workforce and technology challenges.
            </p>
            <p className="section-description">
              We specialize in end-to-end staffing, talent acquisition, and IT services that empower our clients to build future-ready teams. We believe that people are the greatest asset of any organization, and our mission is to help companies find, attract, and retain the right talent while helping candidates find opportunities that align with their ambitions and skills.
            </p>
            <p className="section-description">
              We are more than just a service provider — we are your strategic ally in growth, committed to helping you shape a thriving workforce and unlock transformative technology opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
