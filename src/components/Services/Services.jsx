import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Talent Acquisition',
      description: 'Strategic sourcing of world-class professionals tailored to your organizational DNA.',
      icon: '🎯'
    },
    {
      title: 'AI Matching',
      description: 'Proprietary algorithms that analyze skills, culture, and potential for the perfect fit.',
      icon: '🧠'
    },
    {
      title: 'Global Consulting',
      description: 'Navigating complex workforce challenges with data-driven strategic insights.',
      icon: '🌐'
    },
    {
      title: 'Tech Outsourcing',
      description: 'Scaling your engineering capabilities with verified expert teams.',
      icon: '💻'
    },
    {
      title: 'Executive Search',
      description: 'Connecting you with the visionary leaders who will shape your future.',
      icon: '👑'
    },
    {
      title: 'Market Analysis',
      description: 'Deep-dive insights into talent trends and competitive landscapes.',
      icon: '📊'
    }
  ];

  return (
    <section id="services" className="services reveal reveal-up">
      <div className="services-container">
        <div className="services-header">
          <h2 className="section-title">Our <span>Services</span></h2>
          <p className="section-description">
            Comprehensive workforce solutions powered by intelligence and human expertise.
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
