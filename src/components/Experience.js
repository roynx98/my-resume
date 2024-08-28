import React from 'react';
import './Experience.css'

export const Experience = () => {
  const data = [
    {
      img: 'imgs/caliente.png',
      company: 'Caliente',
      period: 'Jul/2022 - Present',
      description: () => (
        <>
          <p>I’m a front-end developer at Caliente. Using React, I’ve implemented features for the <b>largest online casino in Mexico.</b></p>
          <p>In addition to developing new functionalities and fixing bugs, we are migrating old BackboneJS components to React.</p>
        </>
      ),
    },
    {
      img: 'imgs/epam.png',
      company: 'Emap',
      period: 'Feb/2021 - Jul/2022',
      description: () => (
        <>
          <p>I was a Senior Software Developer at EMAP. My client was Dow Jones, I joined as part of the ad tech team.</p>
          <p>We implemented ad-related features for sites like the <b>Wall Street Journal and MarketWatch, impacting millions of users and the company's revenue.</b></p>
          <p>I worked in a JavaScript full-stack role, my tasks vary from creating an LRU cache on our back-end to modifying the layouts for the ads on the client side with React.</p>
        </>
      ),
    },
    {
      img: 'imgs/ilsp.png',
      company: 'ILSP',
      period: 'Oct/2018 - Feb/2021',
      description: () => (
        <>
          <p>I was a Senior Mobile Developer at ILSP,  I created several apps from scratch using React Native.</p>
          <p>One of these was a GPS logger called Follow, which kept track of <b>more than 5,000 vehicles</b>. Another app was a newsletter app that used notifications to keep users updated with the latest reports.</p>
        </>
      ),
    },
  ];
  return (
    <div>
      <h2>Work Experience</h2>

      <div className="experience-container">
        {
          data.map((item, index) =>
            <div key={index} className="experience-item">
              <div className="experience-icon">
                <img src={item.img} alt="Experince"></img>
                <p className="experience-item-info-period">{item.period}</p>
              </div>

              <div className="experience-item-description" >
                <item.description />
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};
