import React from 'react';

export const Education = () => {
  const data = [
    {
      img: 'imgs/upa.jpeg',
      position: 'Computer Systems Engineer',
      university: 'Universidad Politécnica de Aguascalientes',
      period: 'Oct/2014 - Sep/2018',
      points: [
        'Developed an app for taking skin photos and analyze them for cancer, through a neural network using python.'
      ]
    },
  ];

  return (
    <div>
      <h2>Education</h2>
      <hr />

      {
        data.map((item, index) => 
          <div key={index} className="experience-item">
            <img src={item.img} alt="Experince"></img>

            <div className="experience-item-info">
              <h3>{item.position}</h3>
              <h4>{item.university}</h4>
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
