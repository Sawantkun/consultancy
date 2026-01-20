import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Recruitment & Staffing Solutions',
      description: 'Full-cycle talent acquisition across technical and non-technical roles. We help you find the right talent for every position.',
      icon: '🎯'
    },
    {
      title: 'IT Services & Consulting',
      description: 'Custom IT solutions, digital transformation support, and technology consulting to drive your business forward.',
      icon: '💻'
    },
    {
      title: 'Managed Workforce Solutions',
      description: 'From contract staffing to RPO and workforce planning, we provide comprehensive workforce management solutions.',
      icon: '👥'
    }
  ];

  return (
    <section id="services" className="services reveal reveal-up">
      <div className="services-container">
        <div className="services-header">
          <h2 className="section-title">Our <span>Services</span></h2>
          <p className="section-description">
            End-to-end solutions from talent sourcing to deployment and from IT consulting to managed services, all under one roof.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card reveal reveal-up delay-${index}`}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
