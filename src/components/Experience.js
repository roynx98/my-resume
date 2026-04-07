import React from 'react';
import './Experience.css'

export const Experience = () => {
  const data = [
    {
      company: 'Caliente',
      subtitle: 'Largest Mexican online casino',
      title: 'Senior Front-End Developer',
      img: 'imgs/caliente.png',
      period: 'Jul 2022 - Present',
      bullets: [
        <>Refactored casino UI widgets from BackboneJS to <b>React</b>, modernizing the codebase and enhancing maintainability.</>,
        <>Integrated the SpinPremia payment method to improve transaction success rates and expand coverage.</>,
        <>Optimized the game filtering algorithm, reducing complexity and <b>improving casino loading time by 20%</b>.</>,
        <>Integrated <b>WebSocket API</b> connection to enable real-time updates on the casino homepage.</>,
      ],
    },
    {
      company: 'EPAM',
      subtitle: 'International consulting company, with Dow Jones as a client',
      title: 'Senior Software Developer',
      img: 'imgs/epam.png',
      period: 'Feb 2021 - Jul 2022',
      bullets: [
        <>Implemented ad-related features for major platforms like <b>The Wall Street Journal and MarketWatch</b>, impacting millions of users and significantly contributing to company revenue.</>,
        <>Developed an LRU cache for a <b>Node.js</b> service for ad segmentation, <b>improving the API response time by 10%</b>.</>,
        <>Implement server side rendering for React component to display ads on the Wall Street Journal site</>,
        <>Created an <b>AWS</b> service to collect and analyze ad-related telemetry metrics.</>,
      ],
    },
    {
      company: 'iLSP',
      subtitle: 'Local vehicle tracking and fleet management company',
      title: 'Senior Developer',
      img: 'imgs/ilsp.png',
      period: 'Oct 2018 - Feb 2021',
      bullets: [
        <>Developed a mobile GPS logger app using native iOS and Android SDKs, <b>tracking over 5,000 vehicles.</b></>,
        <>Created a <b>microservice</b> to handle GPS logs for the mobile app, using <b>RabbitMQ</b> to communicate with other services.</>,
        <>Developed a newsletter mobile app with <b>React Native</b> that leveraged notifications to keep users informed with the latest security reports.</>,
      ],
    },
  ];
  return (
    <section aria-label="Experience">
      <h2 className='experience-title'>Experience</h2>
      <div className="experience-container">
        {
          data.map((item, index) =>
            <article key={index} className="experience-item">
              <div className="experience-icon">
                <img src={item.img} alt={item.company} />
                {item.period && <p className="experience-item-info-period">{item.period}</p>}
              </div>
              <div className="experience-item-description">
                <h3 className="experience-item-company">{item.company}</h3>
                {item.subtitle && <p className="experience-item-subtitle">{item.subtitle}</p>}
                <p className="experience-item-title">{item.title}</p>
                <ul>
                  {item.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
                </ul>
              </div>
            </article>
          )
        }
      </div>
    </section>
  );
};
