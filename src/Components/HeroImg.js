import React from 'react';
import "./HeroImgStyle.css";
import introImg from "../assets/intro-bg.jpg";
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={introImg} alt="Portfolio background" />
      </div>

      <div className="content">
        <h1 className="fade-in">
          Hi, I’m <span className="highlight">Asra Nawaz</span> 👋
        </h1>

        <h2 className="slide-up">
          Frontend Web Developer
        </h2>

        <p className="typewriter">
          I build <span className="highlight px-2">modern, responsive</span> web apps using React & JavaScript.
        </p>

        <div className="hero-buttons">
          <Link to="/project" className="btn">View Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact Me</Link>
          {/* Optional CV Button */}
          {/* <a href="/Asra_Nawaz_CV.pdf" className="btn btn-outline" target="_blank" rel="noreferrer">Download CV</a> */}
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
