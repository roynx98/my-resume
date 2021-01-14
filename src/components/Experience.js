import React from 'react';
import './Experience.css'

export const Experience = () => {
  const data = [
    {
      img: '/imgs/ilsp.png',
      position: 'Mobile Developer Sr',
      company: 'ILSP',
      period: 'Oct.2018 - Present',
      points: [
        'Developed and deployed a push notification newsletter app using Ionic and React.',
        'Build an app to measure the risk level of a route using React Native.',
        'Implement an API rest to store GPS coordinates used by more 5,000 daily users.',
        'Created a dashboard to manage GPS devices using Angular.',
      ]
    },
    {
      img: '/imgs/yogome.png',
      position: 'Game Developer Jr',
      company: 'Yogome',
      period: 'Sep.2018 - Oct.2018',
      points: [
        'Build multiple game prototypes for the Epic Heroes of Knowledge platform with Corona SDK.'
      ]
    }
  ];
  return (
    <div>
      <h2>Experience</h2>
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
