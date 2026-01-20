import ParticleField from './ParticleField';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      <div className="background-gradient"></div>
      <div className="particle-field-container">
        <ParticleField />
      </div>
    </div>
  );
};

export default AnimatedBackground;
