import '../components/Services/Services.css';
import { FaBullseye, FaLaptopCode, FaUsers } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: 'Recruitment & Staffing Solutions',
      description: 'Full-cycle talent acquisition across technical and non-technical roles. We help you find the right talent for every position.',
      icon: FaBullseye
    },
    {
      title: 'IT Services & Consulting',
      description: 'Custom IT solutions, digital transformation support, and technology consulting to drive your business forward.',
      icon: FaLaptopCode
    },
    {
      title: 'Managed Workforce Solutions',
      description: 'From contract staffing to RPO and workforce planning, we provide comprehensive workforce management solutions.',
      icon: FaUsers
    }
  ];

  return (
    <div className="page-content">
      <section className="services reveal reveal-up active" style={{ paddingTop: '120px' }}>
        <div className="services-container">
          <div className="services-header">
            <h2 className="section-title">Our <span>Services</span></h2>
            <p className="section-description">
              End-to-end solutions from talent sourcing to deployment and from IT consulting to managed services, all under one roof.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className={`service-card reveal reveal-up delay-${index}`}>
                  <div className="service-icon">
                    <IconComponent />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
