import React from 'react';
import '../index.css';
import earthImg from '../assets/earth-speed.png';
import marsImg from '../assets/mars-speed.png';

const Distance = () => {
  return (
    <div id="distance-section" className="distance-section">
      <h2 className="section-title">Time for Light to Reach Mars</h2>
      <div className="distance-content">
        <div className="planet-images">
          <img src={earthImg} alt="Earth" className="planet-image-large" />
          <img src={marsImg} alt="Mars" className="planet-image-large" />
        </div>
        <div className="distance-info">
          <p>
            The next planet after Earth is Mars, the fourth planet from the Sun. 
            The average distance between Earth and Mars is about <strong>225 million kilometers</strong> (or roughly 140 million miles).
          </p>
          <p>
            Since light travels at a speed of approximately <strong>299,792 kilometers per second</strong> 
            (about 186,282 miles per second), we can calculate the time it would take for light to travel from Earth to Mars.
          </p>
          <div className="time-calculation">
            <h4>Time Calculation:</h4>
            <p>
              <strong>Distance to Mars:</strong> 225,000,000 km <br />
              <strong>Speed of Light:</strong> 299,792 km/s <br />
            </p>
            <p>
              <strong>Time = Distance / Speed =</strong> 225,000,000 km / 299,792 km/s ≈ 750 seconds
            </p>
            <p>
              So, light would take approximately <strong>750 seconds</strong> (or about <strong>12.5 minutes</strong>) to reach Mars from Earth (on average).
            </p>
            <p>
              Depending on the relative positions of Earth and Mars, the time varies from about <strong>4 minutes</strong> (closest approach) 
              to over <strong>24 minutes</strong> (farthest distance).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distance;
