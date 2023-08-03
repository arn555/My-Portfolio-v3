import React from 'react';
import IMG1 from '../../assets/bumble-1.png';
import IMG2 from '../../assets/nike-1.png';
import IMG3 from '../../assets/personal-portfolio-v1.png';
import IMG4 from '../../assets/tinder-1.png';
import IMG5 from '../../assets/user-management.png';
// import IMG6 from '../../assets/';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Bumble Clone',
      img: IMG1,
      description:
        `Bumble dating app allows users to answer survey depending on their match of interest of their potential partner that will lead to start a conversation and if not they can click "Try Again" to take the next survey. `,
      technologies: 'React Native',
      link: 'https://drive.google.com/file/d/1YCr0gXJrAC4Kdq-eUy45Eu1oi-Q2WuFY/view?usp=sharing',
      github: 'https://github.com/arn555/Bumble-Clone-1',
    },
    {
      id: 2,
      title: 'Tinder Clone',
      img: IMG4,
      description:
        'Tinder dating app allows users view profiles of potential matches who can "swipe left" to reject a candidate or "swipe right" to indicate interest. ',
      technologies: 'React Native',
      link: 'https://drive.google.com/file/d/1xIHjNWjm6EVq-2-eiazpIvcAAsb0PwEa/view?usp=sharing',
      github: 'https://github.com/arn555/Tinder-Clone',
    },
    {
      id: 3,
      title: 'Nike Store App Clone',
      img: IMG2,
      description: 'Allows users to check if their size or color is in store allowing for same-day reservations.',
      technologies: 'React Native',
      link: 'https://drive.google.com/file/d/1BVjUg3RQdS_V3GG8Dc1v_bPU66XFzl3w/view?usp=sharing',
      github: 'https://github.com/arn555/Nike-Clone',
    }, 
    {
      id: 4,
      title: 'My Personal Portoflio v1',
      img: IMG3,
      description:
        'Fully responsive interactive website to view my sample projects.',
      technologies: 'HTML | JavaScript | CSS',
      link: 'https://arn555.github.io/My-Portfolio-v1/',
      github: 'https://github.com/arn555/My-Portfolio-v1',
    },
    {
      id: 5,
      title: 'User Management',
      img: IMG5,
      description:
        'Allows admin to view all users, add, update information, and delete users. ',
      technologies: 'MongoDB | ExpressJs | ReactJs | NodeJs',
      link: 'https://github.com/arn555/User-Management',
      github: 'https://github.com/arn555/User-Management',
    },
    // {
    //   id: 6,
    //   title: '',
    //   img: IMG6,
    //   description:
    //     '',
    //   link: '',
    //   github: '',
    // },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Site/Video
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
