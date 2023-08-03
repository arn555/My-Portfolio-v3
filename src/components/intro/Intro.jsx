import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/prop.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>5 months</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5 Sample Projects</small>
            </article>
          </div>
          <p>Hello! My Name is Arn who loves to learn new things and enhance my creativity. My interest in Web Development started last year so I enrolled in Zuitt Coding Bootcamp Phillippines. I've spent the few months in a remote environment and we've learned HTML, CSS, Javascript, Bootstrap, Mobile Responsiveness, ReactJs, ExpressJs, NodeJs, MongoDb, REST API, Github & Gitlab for Web hosting. I'm a Junior Mobile App & Web Developer adapt at writing high quality code for mobile applications for various platforms, such as iOS and Android for clients. Highly skilled to build core features apps and optimize the application for customer satisfaction. Currently, during my vacant time I do self study learning Java and Springboot framework.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro