import React from 'react';
import './Header.css';

export const Header = () => {
  const data = {
    name: 'Roy Rodriguez',
    role: 'Full-Stack Developer',
    email: 'roynx98@gmail.com',
    location: 'CDMX, Mexico'
  };

  return (
    <div className="header-container">

      <div className="header-info-container">
        <img 
          className="header-profile-picture"
          src="/imgs/picture.jpeg"
          alt="Profile picure"></img>
          <h1>{data.name}</h1>

          <div className="header-info-item">
            <img src="/imgs/id.svg"></img>
            <p>{data.role}</p>
          </div>

          <div className="header-info-item">
            <img src="/imgs/email.svg"></img>
            <p>{data.email}</p>
          </div>

          <div className="header-info-item">
            <img src="/imgs/pin.svg"></img>
            <p>{data.location}</p>
          </div>


      </div>

      <div className="header-summary-container">
        <p>
        I am a recent graduate from Cal State East Bay with an M.S. in Statistics with a data science concentrate. I have a solid background and practical knowledge in data analysis, statistical modeling, statistical analysis, data visualization, and machine learning. Seeking an entry position in the data scientist field to leverage skills and gain more practical work experience. Willing and able to work remotely.
Check more on Portfolio!

        <br />

        <a href="https://royrodriguez.net/">https://royrodriguez.net/</a>
        </p>

        <div>

        </div>

        <div className="header-links-container">
          <a href="https://github.com/roynx98">
            <img width="30px" src="/imgs/github.svg"></img>
          </a>

          <a href="https://www.linkedin.com/in/roy-rodriguez-7985a6172/">
            <img width="30px" src="/imgs/linkedin.svg"></img>
          </a>
        </div>

      </div>

    </div>
  );
};

const LinksContainer = () => {

  return (
    <p>dklsaj</p>
  );

}
