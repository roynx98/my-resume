import React from 'react';
import './Skills.css'

export const Skills = () => {
  const sizes = [
    120, 250, 100, 80
  ];
  const data = [
    {
      title: 'Programming',
      items: [
        { name: 'Javascript', img: 'imgs/js.svg' },
        { name: 'Swift', img: 'imgs/swift.svg' }
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
      title: 'Languages',
      items: [
        { name: 'English', img: 'imgs/usa.svg' },
        { name: 'Spanish', img: 'imgs/spain.svg' }
      ]
    },
    {
      title: 'Tools',
      items: [
        { name: 'Git', img: 'imgs/git.svg' },
        { name: 'Xcode', img: 'imgs/xcode.svg' },
      ]
    },

  ];
  return (
    <div>
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {
          data.map((skill, i) =>
            <div key={i} style={{ flexGrow: 1 }}>
              <h3>{skill.title}</h3>
              <div className="skills-section" style={{ width: sizes[i] }}>
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
