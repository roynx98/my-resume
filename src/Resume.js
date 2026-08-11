import React from 'react';
import { Certifications } from './components/Certifications';
import { Experience } from './components/Experience';
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import './Resume.css';

export const Resume = () => {
  return (
    <main className="resume-container">
      <div style={{padding: "40px"}}>
        <Header />

        <Experience />

        <Certifications />

        <Skills />

      </div>
    </main>
  );
};
