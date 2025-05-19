import React from 'react';
import './Experience.css'

export const Experience = () => {
  const data = [
    {
      img: 'imgs/caliente.png',
      period: 'Jul/2022 - Present',
      description: () => (
        <>
          <p className='experience-item-title'>I'm a Front-End Developer at Caliente, the largest online casino in Mexico.</p>
          <ul>
            <li>Refactored casino UI widgets from BackboneJS to <b>React</b>, modernizing the codebase and enhancing maintainability.</li>
            <li>Integrated the SpinPremia payment method to improve transaction success rates and expand coverage.</li>
            <li>Optimized the game filtering algorithm, reducing complexity and <b>improving casino loading time by 20%</b>.</li>
            <li>Integrated <b>WebSocket API</b> connection to enable real-time updates on the casino homepage.</li>
          </ul>
        </>
      ),
    },
    {
      img: 'imgs/epam.png',
      period: 'Feb/2021 - Jul/2022',
      description: () => (
        <>
          <p className='experience-item-title'>I was a Senior Software Developer at EPAM, working with Dow Jones as part of the ad tech team.</p>
          <ul>
            <li>Implemented ad-related features for major platforms like <b>The Wall Street Journal and MarketWatch</b>, impacting millions of users and significantly contributing to company revenue.</li>
            <li>Developed an LRU cache for a <b>Node.js</b> service for ad segmentation, <b>improving the API response time by 10%</b>.</li>
            <li>Created an <b>AWS</b> service to collect and analyze ad-related telemetry metrics.</li>
          </ul>
        </>
      ),
    },
    {
      img: 'imgs/ilsp.png',
      period: 'Oct/2018 - Feb/2021',
      description: () => (
        <>
          <p className='experience-item-title'>I was a Senior Developer at iLSP, focusing on mobile app and API development.</p>
          <ul>
            <li>Developed a mobile GPS logger app using native iOS and Android SDKs, <b>tracking over 5,000 vehicles.</b></li>
            <li>Created a <b>microservice</b> to handle GPS logs for the mobile app, using <b>RabbitMQ</b> to communicate with other services.</li>
            <li>Developed a newsletter mobile app with <b>React Native</b> that leveraged notifications to keep users informed with the latest security reports.</li>
          </ul>
        </>
      ),
    },
  ];
  return (
    <div>
      <h2 className='experience-title'>Experience</h2>
      <div className="experience-container">
        {
          data.map((item, index) =>
            <div key={index} className="experience-item">
              <div className="experience-icon">
                <img src={item.img} alt="Experince"></img>
                {item.period && <p className="experience-item-info-period">{item.period}</p>}
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
