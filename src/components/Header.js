import React from 'react';
import './Header.css';

export const Header = (props) => {
  const {
    showPhone = false,
    showLocation = false,
    showPortfolio = true
  } = props;

  const data = {
    name: 'Roy Rodriguez',
    role: 'Full-Stack Developer',
    email: 'roynx98@gmail.com',
    location: 'CDMX, Mexico',
    phoneNumber: '55 8613 7990',
    info: () => (
      <>
        <p>I am a software developer with a passion for learning and problem solving. I started my development journey making mobile apps, since then I have worked with many technologies, from game engines, JS frameworks to backend services.</p>
        <p>Due to my previous experience, I will be able to provide high quality software. Willing to work remotely.</p>
      </>
    ),
  };

  return (
    <div className="header-container">

      <div className="header-info-container">
        <img
          className="header-profile-picture"
          src="imgs/picture.jpeg"
          alt=""></img>
        <h1>{data.name}</h1>

        <div className="header-info-item">
          <img src="imgs/star.svg" alt=""></img>
          <p>{data.role}</p>
        </div>

        <div className="header-info-item">
          <img src="imgs/email.svg" alt=""></img>
          <a style={{ color: '#444', textDecoration: 'none' }}
            href={`mailto:${data.email}`}>{data.email}</a>
        </div>

        {
          showLocation &&
          <div className="header-info-item">
            <img src="imgs/pin.svg" alt=""></img>
            <p>{data.location}</p>
          </div>
        }

        {
          showPhone &&
          <div className="header-info-item">
            <img src="imgs/pin.svg" alt=""></img>
            <p>{data.phoneNumber}</p>
          </div>
        }

      </div>

      <div className="header-summary-container">
        <data.info />
        {
          showPortfolio &&
          <p>
            See more on my portfolio:
            &nbsp;
            <a href="https://royrodriguez.me">https://royrodriguez.me</a>
          </p>
        }

        <div className="header-links-container">
          <a href="https://github.com/roynx98">
            <img width="30px" src="imgs/github.svg"></img>
          </a>

          <a href="https://www.linkedin.com/in/roy-rodriguez-7985a6172/">
            <img width="30px" src="imgs/linkedin.svg"></img>
          </a>
        </div>

      </div>

    </div>
  );
};

