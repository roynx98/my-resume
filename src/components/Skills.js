import React from 'react';
import './Skills.css'

export const Skills = () => {
  const skills = [
    { name: 'Javascript', img: 'imgs/js.svg' },
    { name: 'Typescript', img: 'imgs/typescript.png' },
    { name: 'Node', img: 'imgs/next-js.svg' },
    { name: 'React', img: 'imgs/react.svg' },
    { name: 'Git', img: 'imgs/git.svg' },
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
