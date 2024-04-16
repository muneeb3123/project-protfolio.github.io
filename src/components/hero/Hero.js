import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <section id="Home" className="hero-page">
      <div className="hero-header">
        <h3>Hello, It's Me</h3>
        <h1>Muneeb ur Rehman</h1>
        <h3>And I'm a <span className="multiple-text"></span></h3>
        <p>
          With a background in developing efficient software applications in a
          global market. More than 1300+ hours of experience, including
          mentoring 10+ junior developers to achieve concrete goals on a strict
          deadline. Strong skills include React, Redux, JavaScript, Ruby on
          Rails, Figma, and Animation Libraries!
        </p>
        <div className="social-media">
          <a
            style={{ "--i": 4 }}
            href="https://twitter.com/Hafizabd4"
            target="_blank"
            rel="noreferrer"
          ><i className="bx bxl-twitter"></i
          ></a>
          <a
            style={{ "--i": 5 }}
            href="https://www.linkedin.com/in/muneebrehmandev/"
            target="_blank"
            rel="noreferrer"
          ><i className="bx bxl-linkedin"></i
          ></a>
          <a
            style={{ "--i": 6 }}
            href="http://bit.ly/46O2BD2"
            target="_blank"
            rel="noreferrer"
          ><i className="bx bxl-whatsapp"></i
          ></a>
          <a
            style={{ "--i": 7 }}
            href="https://github.com/muneeb3123"
            target="_blank"
            rel="noreferrer"
          ><i className="bx bxl-github"></i
          ></a>
        </div>
        <a href="#Contact" className="btn-cv">Contact me</a>
      </div>
      <div className="marzi">
        <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop id="stop1" stopColor="rgba(125, 215, 241, 1)" offset="0%"></stop>
              <stop id="stop2" stopColor="rgba(125, 215, 241, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <mask id="mask-1" maskType="alpha">
            <path fill="url(#sw-gradient)" d="M21.8,-32.7C27.2,-26.1,29.7,-18.3,32,-10.5C34.3,-2.8,36.5,4.9,34.6,11.4C32.7,17.9,26.8,23.3,20.3,27.6C13.9,31.9,6.9,35.1,-0.9,36.3C-8.7,37.5,-17.3,36.6,-23.8,32.4C-30.3,28.1,-34.6,20.3,-37.8,11.9C-41.1,3.5,-43.4,-5.7,-40.2,-12.2C-36.9,-18.7,-28.1,-22.6,-20.5,-28.4C-12.8,-34.2,-6.4,-42,0.9,-43.2C8.2,-44.5,16.4,-39.2,21.8,-32.7Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{ transition: "all 0.3s ease 0s" }}></path>
          </mask>
          <g className="mine-1" mask="url(#mask-1)">
            <path fill="url(#sw-gradient)" d="M21.8,-32.7C27.2,-26.1,29.7,-18.3,32,-10.5C34.3,-2.8,36.5,4.9,34.6,11.4C32.7,17.9,26.8,23.3,20.3,27.6C13.9,31.9,6.9,35.1,-0.9,36.3C-8.7,37.5,-17.3,36.6,-23.8,32.4C-30.3,28.1,-34.6,20.3,-37.8,11.9C-41.1,3.5,-43.4,-5.7,-40.2,-12.2C-36.9,-18.7,-28.1,-22.6,-20.5,-28.4C-12.8,-34.2,-6.4,-42,0.9,-43.2C8.2,-44.5,16.4,-39.2,21.8,-32.7Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{ transition: "all 0.3s ease 0s" }}></path>
            <image className="checking-a" x="5" y="12" href="req/bgremove.png" alt="home-img" />
          </g>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
