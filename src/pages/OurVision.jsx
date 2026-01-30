import '../components/About/About.css';

const OurVision = () => {
  return (
    <div className="page-content">
      <section className="about reveal reveal-up active" style={{ paddingTop: '120px' }}>
        <div className="about-container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">Our <span>Vision</span></h2>
              <p className="section-description">
                Our vision is to be the global leader in IT consultancy and staffing, recognized for our excellence, integrity, and ability to transform businesses through technology and talent.
              </p>
              <p className="section-description">
                We envision a future where every organization has access to the specialized expertise they need to thrive, and every professional find their perfect role to excel and innovate. We aim to set the standard for quality and reliability in the IT services industry.
              </p>
            </div>
            <div className="about-visual">
              <div className="about-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=800&fit=crop&q=80" 
                  alt="Our Vision" 
                  className="about-image"
                />
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurVision;
