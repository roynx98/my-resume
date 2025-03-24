import React from 'react';
import './Header.css';

export const Header = (props) => {
  const data = {
    name: 'Roy Rodriguez',
    role: 'Senior Full-Stack Developer',
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
        <p>Experienced in building scalable and high-quality software solutions, with a strong passion for system design, algorithms, and data structures.</p>
        <p>With 6+ years of experience, I specialize in delivering robust and efficient software solutions. Open to remote opportunities.</p>
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

