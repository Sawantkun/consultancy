import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Client-First Mindset',
      description: 'We take the time to understand your business challenges and design solutions that align with your long-term objectives.',
      icon: '🎯'
    },
    {
      title: 'Strong Talent & Technology Expertise',
      description: 'Our team combines recruitment excellence with deep IT domain knowledge, enabling us to deliver the right talent and solutions—faster.',
      icon: '💡'
    },
    {
      title: 'End-to-End Solutions',
      description: 'From talent sourcing to deployment and from IT consulting to managed services, we offer comprehensive support under one roof.',
      icon: '🔄'
    },
    {
      title: 'Quality & Speed',
      description: 'Our proven processes ensure quick turnaround times without compromising on quality or accuracy.',
      icon: '⚡'
    },
    {
      title: 'Flexible Engagement Models',
      description: 'Contract, permanent, project-based, or managed services—our solutions adapt to your business needs.',
      icon: '🔧'
    },
    {
      title: 'Trusted Partnerships',
      description: 'We focus on building long-term relationships based on transparency, reliability, and consistent delivery.',
      icon: '🤝'
    }
  ];

  return (
    <section id="why-choose-us" className="why-choose-us reveal reveal-up">
      <div className="why-choose-us-container">
        <div className="why-choose-us-header">
          <h2 className="section-title">Why <span>Choose Us</span></h2>
          <p className="section-description">
            We go beyond traditional recruitment and IT service models to deliver reliable, scalable, and business-driven solutions. Our approach is rooted in understanding your goals and delivering outcomes that matter.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className={`feature-card reveal reveal-up delay-${index}`}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
