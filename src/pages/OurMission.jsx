import '../components/About/About.css';

const OurMission = () => {
  return (
    <div className="page-content">
      <section className="about reveal reveal-up active" style={{ paddingTop: '120px' }}>
        <div className="about-container">
          <div className="about-content">
            <div className="about-visual">
              <div className="about-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop&q=80" 
                  alt="Our Mission" 
                  className="about-image"
                />
                <div className="image-overlay"></div>
              </div>
            </div>
            <div className="about-text">
              <h2 className="section-title">Our <span>Mission</span></h2>
              <p className="section-description">
                Our mission is to empower businesses by providing them with the highest caliber of IT talent and innovative technology solutions. We strive to be the bridge between exceptional professionals and forward-thinking organizations, fostering growth and success for both.
              </p>
              <p className="section-description">
                We are committed to understanding the unique needs of our clients and delivering tailored services that drive efficiency and competitive advantage in an ever-evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMission;
