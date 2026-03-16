import React from 'react';
import './Skills.css'

export const Skills = () => {
  const skills = [
    { name: 'Javascript', img: 'imgs/js.svg' },
    { name: 'Claude Code', img: 'imgs/claude.png' },
    { name: 'Typescript', img: 'imgs/typescript.png' },
    { name: 'Node', img: 'imgs/next-js.svg' },
    { name: 'React', img: 'imgs/react.svg' },
    { name: 'AWS', img: 'imgs/aws.png' },
  ];

  return (
    <section aria-label="Skills">
      <h2 className="skills-title">Skills</h2>

      <ul className="skills-container">
        {
          skills.map(({ name, img }) =>
            <li key={name} className="skills-item">
              <img src={img} alt="" aria-hidden="true" />
              <span>{name}</span>
            </li>
          )
        }
      </ul>
    </section>
  );
};
