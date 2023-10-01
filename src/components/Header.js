import React from 'react';
import './Header.css';

export const Header = (props) => {
  const {
    showPhone = true,
    showLocation = false,
    showPortfolio = false
  } = props;

const data = {
    name: 'Elsa Citlali Ramírez Guillén',
    role: 'Biologist / Data Scientist',
    email: 'citlali.rgb@gmail.com',
    location: 'CDMX, Mexico',
    phoneNumber: '449 263 1943',
    summary: "I am a biologist with a Master's degree in Data Science. I have skills in data analysis, modeling, and visualization. I am proficient in R, Python, and SQL.",
    summaryTwo: 'Seeking challenging projects where I can apply my skills, either in the field of data analysis or in biology.'
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
            <img  src="imgs/pin.svg" alt=""></img>
            <p>{data.phoneNumber}</p>
          </div>
        }

      </div>

      <div className="header-summary-container">
        <p>
          {data.summary}
        </p>
        <p>
          {data.summaryTwo}
        </p>

        {
          showPortfolio &&
          <p>
            See more on my portfolio:
            &nbsp;
            <a href="https://royrodriguez.me">https://royrodriguez.me</a>
          </p>
        }

        <div className="header-links-container">
          <a href="https://www.linkedin.com/in/elsa-citlali-ram%C3%ADrez-guill%C3%A9n-6b18561ab/">
            <img width="30px" src="imgs/linkedin.svg"></img>
          </a>
        </div>

      </div>

    </div>
  );
};

