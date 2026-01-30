import '../components/Industries/Industries.css';
import { 
  FaLaptopCode, 
  FaUniversity, 
  FaHospital, 
  FaSatellite, 
  FaShoppingCart, 
  FaIndustry, 
  FaBolt, 
  FaFilm, 
  FaBook 
} from 'react-icons/fa';

const Industries = () => {
  const industries = [
    { name: 'Information Technology & Software Services', icon: FaLaptopCode },
    { name: 'Banking, Financial Services & Insurance (BFSI)', icon: FaUniversity },
    { name: 'Healthcare & Life Sciences', icon: FaHospital },
    { name: 'Telecom & Networking', icon: FaSatellite },
    { name: 'Retail & E-Commerce', icon: FaShoppingCart },
    { name: 'Manufacturing & Engineering', icon: FaIndustry },
    { name: 'Energy & Utilities', icon: FaBolt },
    { name: 'Media & Entertainment', icon: FaFilm },
    { name: 'Education & EdTech', icon: FaBook }
  ];

  return (
    <div className="page-content">
      <section className="industries reveal reveal-up active" style={{ paddingTop: '120px' }}>
        <div className="industries-container">
          <div className="industries-header">
            <h2 className="section-title">Industries <span>We Serve</span></h2>
            <p className="section-description">
              We support organizations across diverse industries, delivering specialized talent and technology solutions tailored to industry-specific needs. Our cross-industry experience allows us to bring best practices, innovation, and speed to every engagement.
            </p>
          </div>
          <div className="industries-grid">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div key={index} className={`industry-card reveal reveal-up delay-${index % 6}`}>
                  <div className="industry-icon">
                    <IconComponent />
                  </div>
                  <h3>{industry.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
