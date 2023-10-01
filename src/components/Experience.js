import React from 'react';
import './Experience.css'

export const Experience = () => {
  const data = [
    {
      img: 'imgs/ucjc.jpg',
      position: 'Data Scientist',
      company: 'Universidad Camilo José Cela',
      period: 'Nov/2022 - Jul/2023',
      points: [
        'Developed a deep learning model for a Primate Image Classifier using PyTorch with a Streamlit Web Application.'
      ]
    },
    {
      img: 'imgs/inegi.png',
      position: 'Data Scientist',
      company: 'INEGI',
      period: 'Feb/2023 - Jul/2023',
      points: [
        'Internship at the INEGI Data Science Laboratory.'
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
