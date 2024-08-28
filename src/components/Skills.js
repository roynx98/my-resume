import React from 'react';
import './Skills.css'

export const Skills = () => {
  const sizes = [
    120, 250, 100, 80
  ];
  const data = [
    {
      title: 'Languages',
      items: [
        { name: 'Javascript', img: 'imgs/js.svg' },
        { name: 'CSS', img: 'imgs/css.svg' },
        { name: 'Typescript', img: 'imgs/swift.svg' }
      ]
    },
    {
      title: 'Libraries/Frameworks',
      items: [
        { name: 'React / React Native', img: 'imgs/react.svg' },
        { name: 'Next.js', img: 'imgs/next-js.svg' },
        { name: 'Expo', img: 'imgs/expo.jpg' },
      ]
    },
    {
      title: 'Tools',
      items: [
        { name: 'Git', img: 'imgs/git.svg' },
        { name: 'VS Code', img: 'imgs/vscode.png' },
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
