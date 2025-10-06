import React from 'react';
import './Experience.css'

export const Experience = () => {
  const data = [
      {
      img: 'imgs/upwork.svg',
      period: 'Jul/2024 - Present',
      description: () => (
        <>
          <p className='experience-item-title'>AI Automation Consultant</p>
          <ul>
            <li>Outsourced Scale (Automation Agency)
              <ul>
                <li>Implemented a <b>bot</b> using <b>Custom GPTs</b> on <b>n8n</b> that interviews company owners about their pain points. The agent then generates an automation plan, sends it to the user, and creates Trello cards for the team to begin work.</li>
                <li>Built an <b>n8n flow</b> to <b>generate leads</b> from Upwork and Indeed. An <b>LLM</b> analyzes job posts to detect companies and contacts, enabling the launch of <b>marketing campaigns</b> in <b>GoHighLevel CRM</b>.</li>
              </ul>
            </li>
            <li>GitLaw (Legal Tech Startup)
              <ul>
                <li>Developed an <b>n8n workflow</b> that <b>scrapes</b> legal documents from the web, intelligently detects changes, and <b>sends email</b> notifications when updates occur.</li>
              </ul>
            </li>
            <li>Barbershop
              <ul>
                <li>Created a <b>voice agent</b> for inbound calls to book appointments using <b>Rettell AI</b> and <b>Twilio</b>.</li>
              </ul>
            </li>
          </ul>
        </>
      ),
    },
    {
      img: 'imgs/caliente.png',
      period: 'Jul/2022 - Present',
      description: () => (
        <>
          <p className='experience-item-title'>I'm a Senior Developer at Caliente, the largest online casino in Mexico.</p>
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
    }
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
