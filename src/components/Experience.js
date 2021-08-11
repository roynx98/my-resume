import React from 'react';
import './Experience.css'

export const Experience = () => {
  const data = [
    {
      img: 'imgs/epam.png',
      position: 'Senior Software Engineer',
      company: 'Emap',
      period: 'Feb/2021 - Present',
      points: [
        'Implement ad-related solutions on the Wall Street Journal site.',
        'Build new features on using JS and React for Dow Jones.',
      ]
    },
    {
      img: 'imgs/ilsp.png',
      position: 'Mobile Developer Sr',
      company: 'ILSP',
      period: 'Oct/2018 - Feb/2021',
      points: [
        'Developed and deployed a push notification newsletter app using Ionic and React.',
        'Build an app to measure the risk level of a route using React Native.',
        'Implement an API rest to store GPS coordinates used by more 5,000 daily users.',
      ]
    },
    {
      img: 'imgs/yogome.png',
      position: 'Game Developer Jr',
      company: 'Yogome',
      period: 'Sep/2018 - Oct/2018',
      points: [
        'Build multiple game prototypes for the Epic Heroes of Knowledge platform with Corona SDK.'
      ]
    },
  ];
  return (
    <div>
      <h2>Work Experience</h2>
      <hr />

      {
        data.map((item, index) => 
          <div key={index} className="experience-item">
            <img src={item.img} alt="Experince"></img>

            <div className="experience-item-info">
              <h3>{item.position}</h3>
              <h4>{item.company}</h4>
              <p>{item.period}</p>
            </div>

            <div className="experience-item-points">
              <ul>
              {
                item.points.map(point => 
                  <li key={point}>{point}</li>
                )
              }
              </ul>
            </div>
          </div>
        )
      }

    </div>
  );
};
