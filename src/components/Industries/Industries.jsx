import './Industries.css';

const Industries = () => {
  const industries = [
    { name: 'Information Technology & Software Services', icon: '💻' },
    { name: 'Banking, Financial Services & Insurance (BFSI)', icon: '🏦' },
    { name: 'Healthcare & Life Sciences', icon: '🏥' },
    { name: 'Telecom & Networking', icon: '📡' },
    { name: 'Retail & E-Commerce', icon: '🛒' },
    { name: 'Manufacturing & Engineering', icon: '🏭' },
    { name: 'Energy & Utilities', icon: '⚡' },
    { name: 'Media & Entertainment', icon: '🎬' },
    { name: 'Education & EdTech', icon: '📚' }
  ];

  return (
    <section id="industries" className="industries reveal reveal-up">
      <div className="industries-container">
        <div className="industries-header">
          <h2 className="section-title">Industries <span>We Serve</span></h2>
          <p className="section-description">
            We support organizations across diverse industries, delivering specialized talent and technology solutions tailored to industry-specific needs. Our cross-industry experience allows us to bring best practices, innovation, and speed to every engagement.
          </p>
        </div>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className={`industry-card reveal reveal-up delay-${index % 6}`}>
              <div className="industry-icon">{industry.icon}</div>
              <h3>{industry.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
