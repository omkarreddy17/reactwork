/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import classes from './Projects.module.css';
import calculator from '../images/calculator.jpg';
import chess from '../images/chess.jpg';
import colorpicker from '../images/colorpicker.jpg';
import ml from '../images/ml.jpg';
import jansewa from '../images/jansewa.jpg';
import age from '../images/age.jpg';
import ths from '../images/ths.jpg';
import covid from '../images/covid.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

// Web projects
const cardItem = [
  
  {
    link: 'https://jansewa.vercel.app/',
    title: '  Jan Sewa',
    techStack: 'Tech Stack- React, Redux , MongoDB',
    desc: 'JanSewa is a unique e-job portal designed to directly connect labourers such as plumbers, electricians, carpenters, and other similar professionals with job employers. ',
    image: jansewa
  },
  
  {
    link: 'https://the-black-hats.github.io/covid-19-resources/',
    title: 'COVID-19 Resources',
    techStack: 'Tech Stack-HTML,CSS',
    desc: 'This project provides live status about availability of oxygen and bed around the nation.',
    image: covid
  },
  {
    link: 'https://THS.netIify.app/',
    title: 'TeleHealthcare System',
    techStack: 'Tech Stack- React js,node js ,three js,MySQL',
    desc: ' A software that provides doctors to create and manage staff, prescriptions, patients, drugs, advice, reports, appointments and many more.',
    image: ths
  },
 
];

export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <li>
        <a href={cardItem.link} className={classes.card} target='_blank'>
          <img src={cardItem.image} className={classes.card__image} alt='' />
          <div className={classes.card__overlay}>
            <div className={classes.card__header}>
              <svg className={classes.card__arc} xmlns='http://www.w3.org/2000/svg'>
                <path />
              </svg>
              <div className={classes.card__header_text}>
                <h3 className={classes.card__title}>{cardItem.title}</h3>
                <span className={classes.card__status}>{cardItem.techStack}</span>
              </div>
            </div>
            <p className={classes.card__description}>{cardItem.desc}</p>
          </div>
        </a>
      </li>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      >
        <span className={classes.head}>MY WORK</span>
        <h2 className={classes.heading}>PROJECTS</h2>
        <ul className={classes.cards}>
          {cardItem.map((item) => {
            return getProjectCard(item);
          })}
        </ul>
        {/* <h2 className={classes.heading}>ANDROID APP PROJECTS</h2>
        <ul className={classes.cards}>
          {cardItemApps.map((item) => {
            return getProjectCard(item);
          })}
        </ul> */}
      </ScrollAnimation>
    </div>
  );
}