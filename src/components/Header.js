import React from 'react';
import './Header.css';

export const Header = (props) => {
  const data = {
    name: 'Roy Rodriguez',
    role: 'AI Automation Specialist',
    links: [
      { url: 'https://github.com/roynx98', icon: 'imgs/github.svg', label: 'github.com/roynx98' },
      { url: 'https://royrodriguez.me/', icon: 'imgs/portfolio.svg', label: 'royrodriguez.me' },
      { url: 'mailto:roynx98@gmail.com', icon: 'imgs/email.svg', label: 'roynx98@gmail.com' },
      { url: 'https://www.linkedin.com/in/roy-rodriguez-7985a6172/', icon: 'imgs/linkedin.svg', label: 'LinkedIn' },
    ],
    email: 'roynx98@gmail.com',
    github: 'github.com/roynx98',
    linkedin: 'linkedin.com/in/roy-rodriguez-7985a6172',
    info: () => (
      <>
        <p>With over 6 years of software development experience and a strong full stack background, I now focus on creating intelligent flows.</p>
        <p>I bring expertise in designing scalable, high-quality automations, with a strong passion for streamlining systems, optimizing processes, and applying algorithms and data structures to intelligent flow design.</p>
      </>
    ),
  };

  return (
    <div className="header-container">
      <div className='header-info-container'>
        <img
          className="header-profile-picture"
          src="imgs/avatar.jpg"
          alt="Avatar"></img>

        <div className='header-info-text'>
          <p className='header-info-name'>{data.name}</p>
          <p className='header-info-role'>{data.role}</p>
          <data.info />
        </div>
      </div>

      <div className='header-info-links'>
        {
          data.links.map((link) => (
            <a className="header-info-link" key={link.url} href={link.url}>
              <img src={link.icon} alt=""/>
              <span>{link.label ?? link.url}</span>
            </a>
          ))
        }
      </div>
    </div>
  );
};

