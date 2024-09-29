import React from 'react';
import '../index.css';

import mercuryImg from '../assets/mercury.webp';
import venusImg from '../assets/venus.jpg';
import earthImg from '../assets/earth.jpg';
import marsImg from '../assets/mars.webp';
import jupiterImg from '../assets/jupiter.webp';
import saturnImg from '../assets/saturn.jpg';
import uranusImg from '../assets/uranus.jpeg';
import neptuneImg from '../assets/neptune.jpeg';

const planets = [
    {
      name: 'Mercury',
      description: 'The smallest and fastest planet, Mercury is the closest to the Sun. It has a very thin atmosphere and experiences extreme temperature fluctuations, ranging from scorching heat during the day to freezing cold at night.',
      img: mercuryImg,
      speed: '47.87 km/s',
    },
    {
      name: 'Venus',
      description: 'Venus has a thick atmosphere composed mainly of carbon dioxide, trapping heat through a runaway greenhouse effect, making it the hottest planet in our solar system. Its surface is marked by volcanoes and vast plains.',
      img: venusImg,
      speed: '35.02 km/s',
    },
    {
      name: 'Earth',
      description: 'Our home planet, Earth is the only planet known to support life. It has a diverse range of ecosystems, climates, and is covered by 71% water. The atmosphere is rich in oxygen and nitrogen, making it suitable for life.',
      img: earthImg,
      speed: '29.78 km/s',
    },
    {
      name: 'Mars',
      description: 'Mars, known as the Red Planet, is home to the tallest volcano, Olympus Mons, and the deepest canyon, Valles Marineris, in the solar system. Its surface is rocky, with polar ice caps, and it has signs of past water flow.',
      img: marsImg,
      speed: '24.07 km/s',
    },
    {
      name: 'Jupiter',
      description: 'Jupiter is the largest planet in our solar system, with a diameter over 11 times that of Earth. It features a Great Red Spot, a massive storm larger than Earth, and a strong magnetic field with numerous moons.',
      img: jupiterImg,
      speed: '13.07 km/s',
    },
    {
      name: 'Saturn',
      description: 'Famous for its stunning rings, Saturn is a gas giant made mostly of hydrogen and helium. Its rings are composed of ice and rock particles, and it has numerous moons, including Titan, which has a thick atmosphere.',
      img: saturnImg,
      speed: '9.69 km/s',
    },
    {
      name: 'Uranus',
      description: 'Uranus is unique because it rotates on its side, resulting in extreme seasonal variations. Its atmosphere is made of hydrogen, helium, and methane, giving it a blue hue. It has faint rings and a collection of moons.',
      img: uranusImg,
      speed: '6.81 km/s',
    },
    {
      name: 'Neptune',
      description: 'Neptune is the farthest planet from the Sun and is known for its intense blue color and the strongest winds in the solar system, reaching up to 2,100 km/h. Its atmosphere contains hydrogen, helium, and methane, contributing to its color.',
      img: neptuneImg,
      speed: '5.43 km/s',
    },
  ];
  

  const Information = () => {
    return (
      <div id="information-section" className="information-section">
        <h2 className="section-title">Planets of the Solar System</h2>
        <div className="planet-cards-container">
          {planets.map((planet) => (
            <div className="planet-card" key={planet.name}>
              <img src={planet.img} alt={planet.name} className="planet-image" />
              <div className="planet-info">
                <h3>{planet.name}</h3>
                <p>{planet.description}</p>
                <p><strong>Orbital Speed:</strong> {planet.speed}</p> {}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

  
  export default Information;