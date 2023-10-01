import React from 'react';

export const Education = () => {
  const data = [
    {
      img: 'imgs/ucjc.jpg',
      position: "Master's degree in Data Science",
      university: 'Universidad Camilo José Cela, Madrid, España.',
      period: 'Oct/2022 - Jul/2023',
      points: [
        "Master's program specializing in Data Analysis and Processing, with a focus on the practical application of Machine Learning, Deep Learning, and Natural Language Processing techniques for advanced data analytics."
      ]
    },
    {
      img: 'imgs/uaa.png',
      position: "Bachelor's degree in Biology",
      university: 'Universidad Autónoma de Aguascalientes, México.',
      period: 'Oct/2017 - Sep/2022',
      points: [
        "Degree program with emphasis on statistical analysis and research methodologies."
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
