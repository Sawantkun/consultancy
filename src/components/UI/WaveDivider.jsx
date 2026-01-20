import { useEffect, useRef } from 'react';
import './WaveDivider.css';

const WaveDivider = () => {
  const path1Ref = useRef(null);
  const path2Ref = useRef(null);

  useEffect(() => {
    const path1 = path1Ref.current;
    const path2 = path2Ref.current;
    if (!path1 || !path2) return;

    let offset = 0;
    const animate = () => {
      offset += 0.02;
      const d1 = `M0,${60 + Math.sin(offset) * 20} Q360,${20 + Math.sin(offset * 1.5) * 15} 720,${60 + Math.sin(offset) * 20} T1440,${60 + Math.sin(offset) * 20} L1440,120 L0,120 Z`;
      const d2 = `M0,${80 + Math.cos(offset) * 15} Q360,${40 + Math.cos(offset * 1.5) * 10} 720,${80 + Math.cos(offset) * 15} T1440,${80 + Math.cos(offset) * 15} L1440,120 L0,120 Z`;
      
      path1.setAttribute('d', d1);
      path2.setAttribute('d', d2);
      
      requestAnimationFrame(animate);
    };
    
    animate();
  }, []);

  return (
    <div className="wave-divider">
      <svg
        className="wave-svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={path1Ref}
          d="M0,60 Q360,20 720,60 T1440,60 L1440,120 L0,120 Z"
          fill="rgba(255, 255, 255, 0.1)"
          className="wave-path"
        />
        <path
          ref={path2Ref}
          d="M0,80 Q360,40 720,80 T1440,80 L1440,120 L0,120 Z"
          fill="rgba(255, 255, 255, 0.05)"
          className="wave-path wave-path-delayed"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
