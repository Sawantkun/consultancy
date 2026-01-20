import './Geometric3D.css';

const Geometric3D = () => {
  return (
    <div className="geometric-3d">
      <div className="cube">
        <div className="cube-face cube-front"></div>
        <div className="cube-face cube-back"></div>
        <div className="cube-face cube-right"></div>
        <div className="cube-face cube-left"></div>
        <div className="cube-face cube-top"></div>
        <div className="cube-face cube-bottom"></div>
      </div>
      <div className="pyramid">
        <div className="pyramid-face pyramid-front"></div>
        <div className="pyramid-face pyramid-back"></div>
        <div className="pyramid-face pyramid-left"></div>
        <div className="pyramid-face pyramid-right"></div>
      </div>
    </div>
  );
};

export default Geometric3D;
