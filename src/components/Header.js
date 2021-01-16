import React from 'react';
import './Header.css';

export const Header = () => {
  const data = {
    name: 'Roy Rodriguez',
    role: 'Full-Stack Developer',
    email: 'roynx98@gmail.com',
    location: 'CDMX, Mexico',
    summary: 'I am a software developer with a passion for learning and problem solving. I started my development journey making mobile apps and games on my own, since then I have worked with many technologies, from game engines, JS frameworks to backend services.',
    summaryTwo: 'Due to my previous experience, I will be able to provide high quality software. Willing and able to work remotely. See more in my Portfolio!'
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
            <img src="/imgs/star.svg" alt=""></img>
            <p>{data.role}</p>
          </div>

          <div className="header-info-item">
            <img src="imgs/email.svg" alt=""></img>
            <p>{data.email}</p>
          </div>

          <div className="header-info-item">
            <img src="imgs/pin.svg" alt=""></img>
            <p>{data.location}</p>
          </div>


      </div>

      <div className="header-summary-container">
        <p>
          {data.summary}
        </p>
        <p>
          {data.summaryTwo}
        </p>
        <a href="https://royrodriguez.net/">https://royrodriguez.net/</a>

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
