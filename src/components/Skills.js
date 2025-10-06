import React from 'react';
import './Skills.css'

export const Skills = () => {
  const skills = [
    { name: 'n8n', img: 'imgs/n8n.png' },
    { name: 'OpenAI', img: 'imgs/openai.svg' },
    { name: 'Node.js', img: 'imgs/next-js.svg' },
    { name: 'React', img: 'imgs/react.svg' },
    { name: 'AWS', img: 'imgs/aws.png' },
    { name: 'Docker', img: 'imgs/docker.png' },
  ];

  return (
    <div>
      <h2 className="skills-title">Skills</h2>

      <div className="skills-container">
        {
          skills.map(({ name, img }) =>
            <div key={name} className="skills-item">
              <img src={img} alt=''></img>
              <p>{name}</p>
            </div>
          )
        }
      </div>
    </div>
  );
};
