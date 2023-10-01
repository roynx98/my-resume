import React from 'react';
import './Skills.css'

export const Skills = () => {
  const sizes = [
    170, 230, 100, 100
  ];
  const data = [
    {
      title: 'Technical skills',
      items: [
        { name: 'Python', img: 'imgs/python.svg'},
        { name: 'R', img: 'imgs/r.png'},
        { name: 'MySQL', img: 'imgs/mysql.svg'},
        { name: 'PHP', img: 'imgs/php.svg'},
      ]
    },
    {
      title: 'Libraries/Frameworks',
      items: [
        { name: 'Seaborn', img: 'imgs/seaborn.svg' },
        { name: 'Matplotlib', img: 'imgs/matplotlib.png' },
        { name: 'Scikit-learn', img: 'imgs/scikit.svg' },
        { name: 'Keras', img: 'imgs/keras.svg' },
        { name: 'PyTorch', img: 'imgs/pytorch.svg' },
      ]
    },
    {
      title: 'Languages',
      items: [
        { name: 'English', img: 'imgs/usa.svg'},
        { name: 'Spanish', img: 'imgs/spain.svg'}
      ]
    },
    {
      title: 'Tools',
      items: [
        { name: 'Power BI', img: 'imgs/powerBi.svg'},
        { name: 'Tableau', img: 'imgs/tableau.svg'},
      ]
    },
    
  ];
  return (
    <div>
      <h2>Skills</h2>
      <hr />

      <div className="skills-container">
        {
          data.map((skill, i) => 
            <div key={i} style={{flexGrow: 1}}>
              <h3>{skill.title}</h3>
              <div className="skills-section" style={{width: sizes[i]}}>
                {
                  skill.items.map((item, j) => 
                    <div key={j} className="skills-item">
                      <img src={item.img}></img>
                      <p>{item.name}</p>
                    </div>
                  )
                }
              </div>
            </div>
          )
        }
      </div>

    </div>
  );
};
