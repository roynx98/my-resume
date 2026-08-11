import React from 'react';
import './Certifications.css';

export const Certifications = () => {
  const data = [
    {
      img: 'imgs/aws.png',
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      link: 'https://www.credly.com/badges/85f54e8f-eb93-48f6-800c-ca1a22bb8ea1/linked_in_profile',
    },
    {
      img: 'imgs/claude.png',
      name: 'Claude Code in Action',
      issuer: 'Anthropic',
      link: 'https://verify.skilljar.com/c/pxfk5xmutf3h',
    },
  ];

  return (
    <section aria-label="Certifications">
      <h2>Certifications</h2>
      {/* <hr /> */}

      <ul className="certifications-container">
        {
          data.map(({ img, name, issuer, date, link }) =>
            <li key={name} className="certifications-item">
              <a
                className="certifications-item-link"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={img} alt="" aria-hidden="true" />

                <div className="certifications-item-info">
                  <h3>{name}</h3>
                  <p className="certifications-item-issuer">{issuer}</p>
                  {date && <p className="certifications-item-date">{date}</p>}
                </div>
              </a>
            </li>
          )
        }
      </ul>
    </section>
  );
};
