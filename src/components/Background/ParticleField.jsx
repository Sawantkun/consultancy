import { useEffect, useRef } from 'react';
import './ParticleField.css';

const ParticleField = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles = [];
    const numParticles = 120;
    const colors = ['indigo', 'orange', 'white'];

    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement('div');
      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.className = `particle particle-${color}`;
      
      const size = Math.random() * 4 + 2;
      const driftX = (Math.random() - 0.5) * 150;
      const driftY = (Math.random() - 0.5) * 150;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      particle.style.setProperty('--drift-x', `${driftX}px`);
      particle.style.setProperty('--drift-y', `${driftY}px`);
      
      particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
      particle.style.animationDelay = `${Math.random() * 2}s`;
      
      container.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach(p => p.remove());
    };
  }, []);

  return <div ref={containerRef} className="particle-field" />;
};

export default ParticleField;
