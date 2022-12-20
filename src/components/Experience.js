import React from 'react';
import './Experience.css'

export const Experience = () => {
  const data = [
    {
      img: 'imgs/caliente.png',
      position: 'Developer',
      company: 'Caliente',
      period: 'Jul/2022 - Present',
      points: [
        'Refactored Mexico casino page from Backbone JS to React.'
      ]
    },
    {
      img: 'imgs/epam.png',
      position: 'Senior Software Engineer',
      company: 'Emap',
      period: 'Feb/2021 - Jul/2022',
      points: [
        'Implement ad-related solutions on the <b>Wall Street Journal</b> site.',
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
        'Implement an API rest to store GPS coordinates used by more <b>5,000 daily users</b>.',
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
                  <li key={point} dangerouslySetInnerHTML={{__html: point}}></li>
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
