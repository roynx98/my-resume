import React from 'react';
import './Skills.css'

export const Skills = () => {
  const data = [
    {
      title: 'Lenguages',
      items: [
        { name: 'Javascript', img: 'imgs/js.svg'},
        { name: 'HTML', img: 'imgs/html.svg'},
        { name: 'CSS', img: 'imgs/css.svg'}
      ]
    },
    {
      title: 'Libraries/Frameworks',
      items: [
        { name: 'React', img: 'imgs/react.svg' },
        { name: 'Express', img: 'imgs/express.svg' },
        { name: 'Jest', img: 'imgs/jest.svg' },
        { name: 'React Native', img: 'imgs/reactNative.svg' },
      ]
    },
    {
      title: 'Idioms',
      items: [
        { name: 'English', img: 'imgs/usa.svg'},
        { name: 'Spanish', img: 'imgs/spain.svg'}
      ]
    },
    {
      title: 'Tools',
      items: [
        { name: 'Git', img: 'imgs/git.svg'}
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
            <div key={i} className="skills-section">
              <h3>{skill.title}</h3>
              {
                skill.items.map((item, j) => 
                  <div key={j} className="skills-item">
                    <img src={item.img}></img>
                    <p>{item.name}</p>
                  </div>
                )
              }
            </div>
          )
        }
      </div>

    </div>
  );
};
