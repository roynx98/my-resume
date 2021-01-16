import React from 'react';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import './Resume.css';

export const Resume = () => {
  return (
    <div className="resume-container">
      <div style={{padding: "40px"}}>
        <Header />

        <br />
        <Experience />

        <br />
        <Skills />

        <br />
        <Education />

      </div>
    </div>
  );
};
